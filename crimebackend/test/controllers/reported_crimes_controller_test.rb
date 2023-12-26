require "test_helper"

class ReportedCrimesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @reported_crime = reported_crimes(:one)
  end

  test "should get index" do
    get reported_crimes_url, as: :json
    assert_response :success
  end

  test "should create reported_crime" do
    assert_difference("ReportedCrime.count") do
      post reported_crimes_url, params: { reported_crime: { description: @reported_crime.description, location: @reported_crime.location, name: @reported_crime.name, tel_no: @reported_crime.tel_no } }, as: :json
    end

    assert_response :created
  end

  test "should show reported_crime" do
    get reported_crime_url(@reported_crime), as: :json
    assert_response :success
  end

  test "should update reported_crime" do
    patch reported_crime_url(@reported_crime), params: { reported_crime: { description: @reported_crime.description, location: @reported_crime.location, name: @reported_crime.name, tel_no: @reported_crime.tel_no } }, as: :json
    assert_response :success
  end

  test "should destroy reported_crime" do
    assert_difference("ReportedCrime.count", -1) do
      delete reported_crime_url(@reported_crime), as: :json
    end

    assert_response :no_content
  end
end
