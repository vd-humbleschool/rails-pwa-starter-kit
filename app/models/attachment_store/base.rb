# The default (i.e. fallback) attachment store.
#
# Attachments delegate certain store specific operations (such as generating
# access urls for public access to the attachment) to the store that they are
# backed by. For an example, see AttachmentStore::AwsS3.
#
# To create a new store:
# 1. Derive from this class, or create a fresh one that implements the methods
#    herein.
# 1. Add store returning logic to Attachment#store. The store must be returned
#    purely based on the attachment's URL.
class AttachmentStore::Base
  def initialize (url)
    @url = url
  end

  # See Attachment#access_urls.
  def access_urls
    { url: @url }
  end
end
