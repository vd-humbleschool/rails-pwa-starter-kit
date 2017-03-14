# Be sure to restart your server when you modify this file.

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.

# Read more: https://github.com/cyu/rack-cors

# MY NOTE: Uncommented this block to allow CORS. Also, modified the `origins`
# call below to allow access only to the client app, the URL(s) of which can be
# provided via a comma separated list in `config/secrets.yml`.
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins *Rails.application.secrets.client_app_base_urls.split(',')

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
