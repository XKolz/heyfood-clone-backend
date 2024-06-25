 Build a web application for managing restaurants, including features to upload images, tag restaurants, and filter the list of restaurants based on these tags. The application should have both backend and frontend components to handle data storage, retrieval, and user interaction.

### API Documentation

#### Base URL
```
http://localhost:5000/api
```

### Start your server
 nodemon server.js

#### Endpoints

1. **Get All Restaurants**
   - **URL**: `/stores`
   - **Method**: `GET`
   - **Query Parameters**:
     - `search`: Filter restaurants by name.
     - `sort` (optional): Sort restaurants by specified fields (comma-separated).
     - `tags` (optional): Filter restaurants by tags (comma-separated).
   - **Example Request**:
   #### Get All restaurants
    ```bash
    curl -X GET "http://localhost:5000/api/stores?search=pizza&sort=name&tags=italian,fastfood"
    ```

2. **Create a New restaurants**
   - **URL**: `/stores`
   - **Method**: `POST`
   - **Body Parameters**:
     - `name` (required): Name of the resturant.
     - `description` (required): Description of the resturant.
     - `location` (optional): Location of the resturant (default is '123 Main St, Anytown, USA').
     - `tags` (optional): Tags for the restaurant (comma-separated).
     - `image` (required): Image file of the resturant.
   - **Example Request**:
    #### Create a New restaurant
    ```bash
    curl -X POST "http://localhost:5000/api/stores" \
    -H "Content-Type: multipart/form-data" \
    -F "name=Pizza Place" \
    -F "description=Best pizza in town" \
    -F "location=456 Elm St, Somewhere, USA" \
    -F "tags=italian,fastfood" \
    -F "image=@/path/to/image.jpg"
    ```

3. **Get All Food Tags**
   - **URL**: `/food-tags`
   - **Method**: `GET`
   - **Example Request**:
     ```bash
     curl -X GET "http://localhost:5000/api/food-tags"
     ```

4. **Create a New Food Tag**
   - **URL**: `/food-tags`
   - **Method**: `POST`
   - **Body Parameters**:
     - `name` (required): Name of the food tag.
     - `image` (required): Image file for the food tag.
   - **Example Request**:
     ```bash
     curl -X POST "http://localhost:5000/api/food-tags" \
     -H "Content-Type: multipart/form-data" \
     -F "name=Pizza" \
     -F "image=@/path/to/image.jpg"
     ```