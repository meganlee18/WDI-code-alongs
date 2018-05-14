class SalesController < ApplicationController
  def new
    @sale = Sale.new
  end

  def create
    #params mass assignment & strong params
    # sale = Sale.new(params)

    sale = Sale.new(sale_params)
    # sale.description = params[:description]
    # sale.address = params[:address]
    # sale.images = params[:images]
    sale.user_id = User.first.id
    sale.save
    redirect_to "/sales/#{sale.id}"
  end

  def show
    #params[:id] matches :id in the route
    @sale = Sale.find(params[:id])
  end

  def destroy
    sale = Sale.find(params[:id])
    sale.destroy
    redirect_to "/"
  end

  def edit
    @sale = Sale.find(params[:id])
  end

  def update
    sale = Sale.find(params[:id])
    sale.description = params[:description]
    sale.address = params[:address]
    sale.save
    redirect_to "/sales/#{sale.id}"
  end

  def index
    @sales = Sale.all
  end

  def sale_params
    params.require(:sale).permit(:description, :address, {images: []})
  end
end
