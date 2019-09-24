import React from 'react';

const EditProduct = () => {
    return (
        <div>
            <form>
                <input type="text" value="name" />
                <br />
                <input type="text" value="description" />
                <br />
                <input type="submit" value="Edit" />
            </form>
        </div>
    );
};

export default EditProduct;
