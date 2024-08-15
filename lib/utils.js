export function reload(data, place, component) {
    const product = component(data);
    place.append(product);
}