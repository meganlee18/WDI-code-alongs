class Api::QuotesController < ApplicationController
  def index
    # @quotes = Quote.all
    # render json: @quotes
    @quotes = Quote.where("content ilike '%cake%'")
    render json: @quotes
  end

  def first3
    @quotes = Quote.all
    render json: @quotes.limit(3)
  end

  def show
  end
end
