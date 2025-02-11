use api::add;
use lambda_http::{run, service_fn, tracing, Body, Error, Request, RequestExt, Response};

pub(crate) async fn function_handler(event: Request) -> Result<Response<Body>, Error> {
    // Extract some useful information from the request
    let params = event.query_string_parameters_ref().and_then(|params| {
        let x = params.first("x")?.parse::<u64>().ok();
        let y = params.first("y")?.parse::<u64>().ok();
        x.zip(y)
    });
    let message = params.map_or("Recieved invalid parameters".to_string(), |(x, y)| {
        format!("{}", add(x, y))
    });

    let resp = Response::builder()
        .status(200)
        .header("content-type", "text/html")
        .body(message.into())
        .map_err(Box::new)?;
    Ok(resp)
}

#[tokio::main]
async fn main() -> Result<(), Error> {
    tracing::init_default_subscriber();

    run(service_fn(function_handler)).await
}

#[cfg(test)]
mod tests {
    use std::collections::HashMap;

    use lambda_http::{Request, RequestExt};

    use super::*;

    #[tokio::test]
    async fn test_generic_http_handler() {
        let request = Request::default();

        let response = function_handler(request).await.unwrap();
        assert_eq!(response.status(), 200);

        let body_bytes = response.body().to_vec();
        let body_string = String::from_utf8(body_bytes).unwrap();

        assert_eq!(body_string, "Recieved invalid parameters");
    }

    #[tokio::test]
    async fn test_http_handler_with_query_string() {
        let mut query_string_parameters: HashMap<String, String> = HashMap::new();
        query_string_parameters.insert("x".into(), "2".into());
        query_string_parameters.insert("y".into(), "3".into());

        let request = Request::default().with_query_string_parameters(query_string_parameters);

        let response = function_handler(request).await.unwrap();
        assert_eq!(response.status(), 200);

        let body_bytes = response.body().to_vec();
        let body_string = String::from_utf8(body_bytes).unwrap();

        assert_eq!(body_string, "5");
    }
}
