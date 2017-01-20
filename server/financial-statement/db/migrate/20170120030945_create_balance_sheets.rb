class CreateBalanceSheets < ActiveRecord::Migration[5.0]
  def change
    create_table :balance_sheets do |t|
      t.string :ticker
      t.string :year
      t.float :CashAndCashEquivalentsAtCarryingValue
      t.float :AvailableForSaleSecuritiesCurrent
      t.float :AccountsReceivableNetCurrent
      t.float :InventoryNet
      t.float :NontradeReceivablesCurrent
      t.float :OtherAssetsCurrent
      t.float :AssetsCurrent
      t.float :AvailableForSaleSecuritiesNoncurrent
      t.float :PropertyPlantAndEquipmentNet
      t.float :Goodwill
      t.float :IntangibleAssetsNetExcludingGoodwill
      t.float :OtherAssetsNoncurrent
      t.float :Assets
      t.float :AccountsPayableCurrent
      t.float :AccruedLiabilitiesCurrent
      t.float :DeferredRevenueCurrent
      t.float :CommercialPaper
      t.float :LongTermDebtCurrent
      t.float :LiabilitiesCurrent
      t.float :DeferredRevenueNoncurrent
      t.float :LongTermDebtNoncurrent
      t.float :OtherLiabilitiesNoncurrent
      t.float :Liabilities
      t.float :CommonStocksIncludingAdditionalPaidInCapital
      t.float :RetainedEarningsAccumulatedDeficit
      t.float :AccumulatedOtherComprehensiveIncomeLossNetOfTax
      t.float :StockholdersEquity
      t.float :LiabilitiesAndStockholdersEquity

      t.timestamps
    end
  end
end
