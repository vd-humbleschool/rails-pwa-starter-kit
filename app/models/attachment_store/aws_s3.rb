# Store for the AWS S3 bucket assigned to this project.
#
# Use this store for URLs of the form 's3:///relative-path-to-object'. Notice
# that we don't hard-code the S3 bucket. This lets us easily switch to another
# bucket later if we wish to, without having to modify all the attachment URLs.
class AttachmentStore::AwsS3 < AttachmentStore::Base
  def access_urls
    case
      when video? then video_access_urls
      else default_access_urls
    end
  end

  private

  def extname
    File.extname(@url)
  end

  def video?
    %w(.mp4 .avi .wmv).include?(extname)
  end

  # Extracts the AWS S3 object key from a URL of the form
  # 's3:///some-aws-S3-object-key'.
  def s3_object_key (url)
    url[5..-1]
  end

  def cf_signed_url (url)
    key = s3_object_key(url)

    AwsUtils.cf_signed_url(key)
  end

  # Access URLs for video playback.
  #
  # Given that `url` is the location of the original file on S3, assumes the
  # existence of the following transcoded files:
  # * <url>/transcoded/360p.mp4
  # * <url>/transcoded/480p.mp4
  def video_access_urls
    {
        '360p': cf_signed_url("#{@url}/transcoded/360p.mp4"),
        '480p': cf_signed_url("#{@url}/transcoded/480p.mp4")
    }
  end

  def default_access_urls
    { url: cf_signed_url(@url) }
  end
end
