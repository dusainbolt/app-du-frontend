
# app du
- Doc gen text local  (https://drive.google.com/drive/folders/1XmsGcXNLwP1Hw4s_j8pQc2Tck5QOjtuR)

# build github

install gh-pages
them vao package.json
// Thêm đường dẫn homepage
// https://[your-user-name].github.io/[your-repo-name]/
"homepage": "https://minhlq-0928.github.io/deploy-github/",

// Thêm command predeploy & deploy app
"predeploy": "npm run build",
"deploy": "gh-pages -d build",

# Flow call api

- Sử dụng Middleware saga
  - Bao gồm
    - Actions : thực hiện action của người dùng tương tác.
    - Reducer : lưu chữ dữ liệu state.
    - Saga : Xử lý data call api, logic.....
  - Khi thêm mới 1 action call api thì cần tạo ra 3 file
    - Actions
    - Reducer cần import và định nghĩa ở file rootReducer ở folder redux.
    - Saga cần import và định nghĩa ở file rootSaga ở folder redux.
  - Redux persit (cho việc cache data dưới web)
    - Vào file configStore có hàm persistConfig.
      - blacklist : reducer lưu state bình thương.
      - whitelist : reducer lưu cache.

# Rule

  - Trước khi đẩy code lên hay merge code cần chạy lệnh ( ) sửa hết lỗi eslint mới được đẩy lên.
  - Cài Extentsions ESLint trên visual để giúp thông báo lỗi eslint và sửa các lỗi eslint 