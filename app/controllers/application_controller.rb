class ApplicationController < ActionController::Base
  before_action :set_locale

  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def set_locale
    session[:language] ||= valid_or_default(clean_dashed_locale(accept_locale(request.env)))
    I18n.locale = session[:language]
  end

  protected
    def accept_locale env
      accept_langs = env["HTTP_ACCEPT_LANGUAGE"]
      return if accept_langs.nil?

      languages_and_qvalues = accept_langs.split(",").map { |l|
        l += ';q=1.0' unless l =~ /;q=\d+(?:\.\d+)?$/
        l.split(';q=')
      }

      lang = languages_and_qvalues.sort_by { |(locale, qvalue)|
        qvalue.to_f
      }.last.first

      lang == '*' ? nil : lang
    end

    # Returns a cleaned up version of locale, or the default
    def clean_dashed_locale locale
      return I18n.default_locale unless locale
      if locale.match(/^\w{2}-\w{2}$/)
        locale = locale.split('-').first
      else
        locale
      end
    end

    def valid_or_default locale
      valid_locale?(locale) ? locale : I18n.default_locale
    end

    def valid_locale? locale
      I18n.available_locales.include?(locale.to_sym)
    end

end
