const Parser = require('@postlight/parser');

export default async function handler(request, response) {
  if (request.query.url) {
    const result = await Parser.parse(request.query.url);
    response.status(200).json(result);
  } else {
    response.status(400).json({
      "error": true,
      "message": "A url parameter must be passed."
    })
  };
}
