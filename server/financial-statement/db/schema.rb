# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170120030945) do

  create_table "balance_sheets", force: :cascade do |t|
    t.string   "ticker"
    t.string   "year"
    t.float    "CashAndCashEquivalentsAtCarryingValue"
    t.float    "AvailableForSaleSecuritiesCurrent"
    t.float    "AccountsReceivableNetCurrent"
    t.float    "InventoryNet"
    t.float    "NontradeReceivablesCurrent"
    t.float    "OtherAssetsCurrent"
    t.float    "AssetsCurrent"
    t.float    "AvailableForSaleSecuritiesNoncurrent"
    t.float    "PropertyPlantAndEquipmentNet"
    t.float    "Goodwill"
    t.float    "IntangibleAssetsNetExcludingGoodwill"
    t.float    "OtherAssetsNoncurrent"
    t.float    "Assets"
    t.float    "AccountsPayableCurrent"
    t.float    "AccruedLiabilitiesCurrent"
    t.float    "DeferredRevenueCurrent"
    t.float    "CommercialPaper"
    t.float    "LongTermDebtCurrent"
    t.float    "LiabilitiesCurrent"
    t.float    "DeferredRevenueNoncurrent"
    t.float    "LongTermDebtNoncurrent"
    t.float    "OtherLiabilitiesNoncurrent"
    t.float    "Liabilities"
    t.float    "CommonStocksIncludingAdditionalPaidInCapital"
    t.float    "RetainedEarningsAccumulatedDeficit"
    t.float    "AccumulatedOtherComprehensiveIncomeLossNetOfTax"
    t.float    "StockholdersEquity"
    t.float    "LiabilitiesAndStockholdersEquity"
    t.datetime "created_at",                                      null: false
    t.datetime "updated_at",                                      null: false
  end

end
