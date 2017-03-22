class Attachment < ApplicationRecord
  validates :url, presence: true

  # Gets the store backing this attachment.
  #
  # See AttachmentStore::Base for how to create a new store.
  def store
    store_class =
        case
          when url.start_with?('s3:///') then AttachmentStore::AwsS3
          else AttachmentStore::Base
        end

    @store ||= store_class.new(url)
  end

  # Access URLs (as opposed to the raw `url`) providing public access to the
  # attachment, such as for viewing, playback, download etc.
  #
  # Required because:
  # * Access to the original url may be forbidden to the general public
  # * The attachment may have been post-processed (for example, a video file
  #   might have been transcoded) to a better suited format for consumption.
  def access_urls
    store.access_urls
  end
end
