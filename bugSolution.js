```javascript
function findDocuments(criteria) {
  const query = {};
  if (criteria.field && criteria.field.length > 0) {
    query.field = { $in: criteria.field };
  }
  return db.collection.find(query);
}
```