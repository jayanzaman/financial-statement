Rails.application.routes.draw do
  root :to => "balance_sheets#index"
  resources :balance_sheets
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
