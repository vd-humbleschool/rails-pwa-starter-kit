class AwsUtils
  CF_SIGNER =
      Aws::CloudFront::UrlSigner.new(
          key_pair_id: Rails.application.secrets.aws_cf_key_pair_id,
          private_key: Rails.application.secrets.aws_cf_private_key.gsub('\n', "\n")
      )

  CF_DISTRIBUTION_URL = "https://#{Rails.application.secrets.aws_cf_distribution_domain_name}"

  def self.cf_signed_url (s3_object_key, expires_in = 24.hours)
    raw_object_url = "#{CF_DISTRIBUTION_URL}#{URI.encode(s3_object_key)}"
    expires_at = Time.current + expires_in

    CF_SIGNER.signed_url(raw_object_url, expires: expires_at)
  end
end
