class ReportedCrimesController < ApplicationController
  before_action :set_reported_crime, only: %i[ show update destroy ]

  # GET /reported_crimes
  def index
    @reported_crimes = ReportedCrime.all

    render json: @reported_crimes
  end

  # GET /reported_crimes/1
  def show
    render json: @reported_crime
  end

  # POST /reported_crimes
  def create
    @reported_crime = ReportedCrime.new(reported_crime_params)

    if @reported_crime.save
      render json: @reported_crime, status: :created, location: @reported_crime
    else
      render json: @reported_crime.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /reported_crimes/1
  def update
    if @reported_crime.update(reported_crime_params)
      render json: @reported_crime
    else
      render json: @reported_crime.errors, status: :unprocessable_entity
    end
  end

  # DELETE /reported_crimes/1
  def destroy
    @reported_crime.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_reported_crime
      @reported_crime = ReportedCrime.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def reported_crime_params
      params.require(:reported_crime).permit(:name, :tel_no, :location, :description)
    end
end
