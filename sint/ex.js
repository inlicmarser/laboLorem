function loadPropertyEditor(commonDraft, propertyName, widgetNode) {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation, like fetching data or loading a template
    setTimeout(() => {
      if (commonDraft && propertyName && widgetNode) {
        // Simulate a successfully loaded widget
        let widget = document.createElement('div');
        widget.textContent = `Editor for ${propertyName}`;
        widgetNode.appendChild(widget);
        resolve(widget);
      } else {
        reject(new Error('Invalid arguments provided'));
      }
    }, 1000); // Simulate a delay of 1 second
  });
}

// Usage
let commonDraft = { id: 1, name: 'Draft' };
let propertyName = 'exampleProperty';
let widgetNode = document.getElementById('widget-container');

loadPropertyEditor(commonDraft, propertyName, widgetNode).then((widget) => {
  console.log('Widget loaded:', widget);
}).catch((error) => {
  console.error('Failed to load the widget:', error);
});
