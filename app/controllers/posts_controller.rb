class PostsController < ApplicationController
  def index
    render json: Post.all
  end

  def show
    post = Post.find(params[:id])

    render json: post.as_json(include: {
        attachment: { methods: :access_urls }
    })
  end
end
