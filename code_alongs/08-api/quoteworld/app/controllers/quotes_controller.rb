class QuotesController < ApplicationController
  def index
    @quotes = Quote.all

    render :index
    #render json: @quotes
  end
end
