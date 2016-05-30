class PagesController < ApplicationController
  def home
  end

  def profile
    birth_date = Date.new(1991, 6, 13)
    today = Date.current
    @age = ((today - birth_date).to_i / 365.0).floor
  end

  def resume
  end

  def contact
  end
end
