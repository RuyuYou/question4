function collect_same_elements(collection_a, object_b) {
    var sameElements = buildSameElements(collection_a, object_b);
    return sameElements;
}

function buildSameElements(collection_a, object_b) {
    var sameElements = [];
    collection_a.forEach(function (array) {
        for (var j = 0; j < object_b.value.length; j++) {
            if (array.key === object_b.value[j]) {
                sameElements.push(array.key);
            }
        }
    });
    return sameElements;
}

module.exports = collect_same_elements;


module.exports = collect_same_elements;
