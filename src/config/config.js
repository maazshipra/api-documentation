const isDevelopment =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

let testUrl = 'https://staging.theerpcloud.com/',
  testUrl2 = 'https://support.expoundtechnivo.com';

if (isDevelopment) {
  testUrl = 'http://127.0.0.1:8000/';
  testUrl2 = 'https://support.expoundtechnivo.com';
}
const apiUrl = `${testUrl}/api/profiles/login/`;
export default {
  isDevelopment,
  api_url: apiUrl,
  test_url: testUrl,
  test_2_url: testUrl2,
};
