require 'test_helper'

class PagesControllerTest < ActionController::TestCase
  test "should get home" do
    get :home
    assert_response :success
    assert_template :home
    assert_template layout: "layouts/application"
    assert_select 'title', "Home | Andrea Olivieri"
  end

  test "should get profile" do
    get :profile
    assert_response :success
    assert_template :profile
    assert_template layout: "layouts/application"
    assert_select 'title', "Profile | Andrea Olivieri"
  end

  test "should get resume" do
    get :resume
    assert_response :success
    assert_template :resume
    assert_template layout: "layouts/application"
    assert_select 'title', "Resume | Andrea Olivieri"
  end

  test "should get contact" do
    get :contact
    assert_response :success
    assert_template :contact
    assert_template layout: "layouts/application"
    assert_select 'title', "Contact | Andrea Olivieri"
  end
end
