import React, { useState } from "react";

export default function EditProduct({ product = {}, onSave }) {
  const [visible, setVisible] = useState(false);
  const [productData, setProduct] = useState({
    name: product.name || "",
    quantity: product.quantity || "",
    price: product.price || "",
    category: product.category || "",
    is_archived: product.is_archived || false,
    file: null,
  });

  const [processingEditProduct, setProcessingEditProduct] = useState(false);

  const submitProducts = (e) => {
    e.preventDefault();
    setProcessingEditProduct(true);

    // Pure frontend callback
    if (onSave) onSave(productData);

    setTimeout(() => {
      setProcessingEditProduct(false);
      setVisible(false);
    }, 500);
  };

  const resetForm = () => {
    setProduct({
      name: product.name || "",
      quantity: product.quantity || "",
      price: product.price || "",
      category: product.category || "",
      is_archived: product.is_archived || false,
      file: null,
    });
  };

  const brownButton =
    "bg-[#4b2e17] text-white font-semibold px-6 py-2 rounded-xl hover:bg-[#3a2312] transition-colors";

  const secondaryButton =
    "bg-gray-200 text-gray-800 font-semibold px-4 py-2 rounded-xl hover:bg-gray-300 transition-colors";

  return (
    <div>
      {/* OPEN MODAL BUTTON */}
      <button
        className="text-[#4b2e17] font-semibold px-6 py-2 rounded-xl hover:bg-[#4b2e17] hover:text-white transition-colors text-center"
        style={{ width: "15rem" }}
        onClick={() => setVisible(true)}
      >
        Edit Product
      </button>

      {/* MODAL */}
      {visible && (
        <div
          className="mt-4 bg-white p-6 rounded-2xl shadow-md border border-[#e2cdbf] w-full max-w-3xl mx-auto space-y-4"
          style={{ animation: "fadeIn 0.2s ease-out" }}
        >
          {/* Close (X) Button */}
          <div className="flex justify-end">
            <button
              className={secondaryButton + " text-xl font-bold"}
              onClick={() => setVisible(false)}
            >
              ×
            </button>
          </div>

          <form onSubmit={submitProducts} className="space-y-4">
            {/* NAME */}
            <div>
              <label className="block mb-1 font-medium">Product Name:</label>
              <input
                type="text"
                name="name"
                value={productData.name}
                onChange={(e) =>
                  setProduct({ ...productData, name: e.target.value })
                }
                className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                required
              />
            </div>

            {/* QUANTITY */}
            <div>
              <label className="block mb-1 font-medium">Quantity:</label>
              <input
                type="number"
                name="quantity"
                value={productData.quantity}
                onChange={(e) =>
                  setProduct({
                    ...productData,
                    quantity: Number(e.target.value),
                  })
                }
                className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                required
              />
            </div>

            {/* PRICE */}
            <div>
              <label className="block mb-1 font-medium">Price:</label>
              <input
                type="number"
                name="price"
                value={productData.price}
                onChange={(e) =>
                  setProduct({
                    ...productData,
                    price: Number(e.target.value),
                  })
                }
                className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                required
              />
            </div>

            {/* CATEGORY */}
            <div>
              <label className="block mb-1 font-medium">Category:</label>
              <input
                type="text"
                name="category"
                value={productData.category}
                onChange={(e) =>
                  setProduct({ ...productData, category: e.target.value })
                }
                className="border border-gray-300 rounded-lg px-3 py-2 w-full"
              />
            </div>

            {/* ARCHIVED */}
            <div>
              <label className="block mb-1 font-medium">Is Archived?</label>
              <select
                name="is_archived"
                value={productData.is_archived}
                onChange={(e) =>
                  setProduct({
                    ...productData,
                    is_archived: e.target.value === "true",
                  })
                }
                className="border border-gray-300 rounded-lg px-3 py-2 w-full"
              >
                <option value="false">Not Archived</option>
                <option value="true">Archived</option>
              </select>
            </div>

            {/* FILE UPLOAD */}
            <div>
              <label className="block mb-1 font-medium">Picture:</label>
              <input
                type="file"
                name="file"
                accept="image/*"
                onChange={(e) =>
                  setProduct({
                    ...productData,
                    file: e.target.files[0],
                  })
                }
                className="w-full"
              />
            </div>

            {/* BUTTONS */}
            <div className="flex justify-center space-x-4 mt-6">
              <button
                type="submit"
                className={brownButton}
                disabled={processingEditProduct}
              >
                Save
              </button>

              <button
                type="button"
                className={secondaryButton}
                onClick={resetForm}
              >
                Clear
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
