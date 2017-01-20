require 'test_helper'

class BalanceSheetsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @balance_sheet = balance_sheets(:one)
  end

  test "should get index" do
    get balance_sheets_url, as: :json
    assert_response :success
  end

  test "should create balance_sheet" do
    assert_difference('BalanceSheet.count') do
      post balance_sheets_url, params: { balance_sheet: { ticker: @balance_sheet.ticker } }, as: :json
    end

    assert_response 201
  end

  test "should show balance_sheet" do
    get balance_sheet_url(@balance_sheet), as: :json
    assert_response :success
  end

  test "should update balance_sheet" do
    patch balance_sheet_url(@balance_sheet), params: { balance_sheet: { ticker: @balance_sheet.ticker } }, as: :json
    assert_response 200
  end

  test "should destroy balance_sheet" do
    assert_difference('BalanceSheet.count', -1) do
      delete balance_sheet_url(@balance_sheet), as: :json
    end

    assert_response 204
  end
end
