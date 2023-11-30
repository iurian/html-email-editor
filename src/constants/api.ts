export const API_BASE_URL =
  process.env.NODE_ENV === 'production'
    ? `https://sellyagentemailtemplates.azurewebsites.net/api`
    : 'http://localhost:7071/api';
