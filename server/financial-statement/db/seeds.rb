# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


BalanceSheet.destroy_all

BalanceSheet.create({
  ticker: 'aapl',
  year: '2016-10-26T00:00:00',
  CashAndCashEquivalentsAtCarryingValue: 20484000000.0,
  AvailableForSaleSecuritiesCurrent: 46671000000.0,
  AccountsReceivableNetCurrent: 15754000000.0,
  InventoryNet: 2132000000.0,
  NontradeReceivablesCurrent: 13545000000.0,
  OtherAssetsCurrent: 8283000000.0,
  AvailableForSaleSecuritiesNoncurrent: 106869000000.0,
  AssetsCurrent: 170430000000.0,
  PropertyPlantAndEquipmentNet: 27010000000.0,
  Goodwill: 5414000000.0,
  IntangibleAssetsNetExcludingGoodwill: 3206000000.0,
  OtherAssetsNoncurrent: 8757000000.0,
  Assets: 321686000000.0,
  AccountsPayableCurrent: 37294000000.0,
  AccruedLiabilitiesCurrent: 22027000000.0,
  DeferredRevenueCurrent: 8080000000.0,
  CommercialPaper: 8105000000.0,
  LongTermDebtCurrent: 3500000000.0,
  LiabilitiesCurrent: 79006000000.0,
  DeferredRevenueNoncurrent: 2930000000.0,
  LongTermDebtNoncurrent: 75427000000.0,
  OtherLiabilitiesNoncurrent: 36074000000.0,
  Liabilities: 193437000000.0,
  CommonStocksIncludingAdditionalPaidInCapital: 31251.0,
  RetainedEarningsAccumulatedDeficit: 96364000000.0,
  AccumulatedOtherComprehensiveIncomeLossNetOfTax: 634000000.0,
  StockholdersEquity: 128249000000.0,
  LiabilitiesAndStockholdersEquity: 321686000000.0
  })
