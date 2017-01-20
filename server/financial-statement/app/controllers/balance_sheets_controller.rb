class BalanceSheetsController < ApplicationController
  before_action :set_balance_sheet, only: [:show, :update, :destroy]

  # GET /balance_sheets
  def index
    @balance_sheets = BalanceSheet.all
    puts @balance_sheets
    render json: @balance_sheets
  end

  # GET /balance_sheets/1
  def show

    ### example
    # get_new_stuff(id)\
    # this method is located in the application controller
    ## end example
    render json: @balance_sheet
  end

  # POST /balance_sheets
  def create
    @balance_sheet = BalanceSheet.new(balance_sheet_params)

    if @balance_sheet.save
      render json: @balance_sheet, status: :created, location: @balance_sheet
    else
      render json: @balance_sheet.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /balance_sheets/1
  def update
    if @balance_sheet.update(balance_sheet_params)
      render json: @balance_sheet
    else
      render json: @balance_sheet.errors, status: :unprocessable_entity
    end
  end

  # DELETE /balance_sheets/1
  def destroy
    @balance_sheet.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_balance_sheet
      @balance_sheet = BalanceSheet.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def balance_sheet_params
      params.require(:balance_sheet).permit(
        :ticker,
        :year,
        :CashAndCashEquivalentsAtCarryingValue,
        :AvailableForSaleSecuritiesCurrent,
        :AccountsReceivableNetCurrent,
        :InventoryNet,
        :NontradeReceivablesCurrent,
        :OtherAssetsCurrent,
        :AssetsCurrent,
        :AvailableForSaleSecuritiesNoncurrent,
        :PropertyPlantAndEquipmentNet,
        :Goodwill,
        :IntangibleAssetsNetExcludingGoodwill,
        :OtherAssetsNoncurrent,
        :Assets,
        :AccountsPayableCurrent,
        :AccruedLiabilitiesCurrent,
        :DeferredRevenueCurrent,
        :CommercialPaper,
        :LongTermDebtCurrent,
        :LiabilitiesCurrent,
        :DeferredRevenueNoncurrent,
        :LongTermDebtNoncurrent,
        :OtherLiabilitiesNoncurrent,
        :Liabilities,
        :CommonStocksIncludingAdditionalPaidInCapital,
        :RetainedEarningsAccumulatedDeficit,
        :AccumulatedOtherComprehensiveIncomeLossNetOfTax,
        :StockholdersEquity,
        :LiabilitiesAndStockholdersEquity
        )
    end
end
