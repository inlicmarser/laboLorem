function attr(scene, item, attrs, tag) {
    // Ensure the item exists in the scene
    if (!scene || !item || !attrs) {
        console.error("Invalid parameters.");
        return;
    }

    // Set attributes on the item
    Object.keys(attrs).forEach(key => {
        item[key] = attrs[key];
    });

    // Optionally add a tag to the item
    if (tag) {
        item.tag = tag;
    }

    // Log the operation for debugging purposes
    console.log(`Attributes set on item:`, item);
}

// Example usage:

// Define a mock scene and item
let scene = {};
let item = { id: 1, name: "ExampleItem" };

// Define attributes to be set
let attrs = {
    position: { x: 10, y: 20, z: 30 },
    color: 'red'
};

// Define an optional tag
let tag = 'exampleTag';

// Call the attr function
attr(scene, item, attrs, tag);

// Output the modified item
console.log(item);
