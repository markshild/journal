class PostsController < ApplicationController
  def create
    @post = Post.new(post_params)
    if @post.save
      render :json => @post.to_json
    else
      render :json => {:errors => @posts.errors.full_messages}, status: 422
    end
  end

  private
  def post_params
    params.require(:post).permit(:title, :body)
  end
end
