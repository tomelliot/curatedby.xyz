async function getJsonRestaurants() {
  return fetch('https://api.jsonbin.io/b/5fcd2ea665c249127ba3fcb1/latest', {
    headers: {
      "secret-key": '$2b$10$Nj0RBzfr2eEWgZhCVKOiq.umS1a..QkhbOFmlP8bSw40klmzQgEH.'
    }
  }).then( response => response.json() );
};

function addInstaDom(target, docFragment, id, instagramCode) {
  const cloned = target.cloneNode(true);
  cloned.id="id" + id;
  cloned.innerHTML=cloned.innerHTML.replace("BsOr13dnWYW", instagramCode)
  docFragment.appendChild(cloned);
  // target.parentNode.insertBefore(cloned, target);
  // target.parentNode.appendChild(cloned);
}

function addMarkerDom(target, docFragment, id, lat, lon) {
  const cloned = target.cloneNode(true);
  cloned.id="marker" + id;
  cloned.href="#id" + id;
  cloned.dataset['lat']=lat
  cloned.dataset['lng']=lon
  docFragment.appendChild(cloned);
  // target.parentNode.insertBefore(cloned, target);
}

function processJson(json_posts) {
  var instaFragment = document.createDocumentFragment();
  var markerFragment = document.createDocumentFragment();
  const instaTarget = $("#id1")[0];
  const markerTarget = $("#marker1")[0]

  for (var i = 0; i < json_posts.length - 1; i++) {
  // for (var i = 1; i < 10; i++) {
    addInstaDom(instaTarget, instaFragment, json_posts[i]["id"], json_posts[i]["instagramCode"]);
    addMarkerDom(markerTarget, markerFragment, json_posts[i]["id"], json_posts[i]['lat'], json_posts[i]['lon']);
  }

  instaTarget.parentNode.insertBefore(instaFragment, instaTarget);
  markerTarget.parentNode.insertBefore(markerFragment, markerTarget);
}

function enableSearch() {
  const target = $("#search-input")[0]
  target.style['pointer-events'] = "auto";
  target.placeholder = "Type a city...";
}

function dynamicallyLoadScript(url) {
  var script = document.createElement("script");  // create a script DOM node
  script.src = url;  // set its src to the provided URL
  document.head.appendChild(script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}

function handleSearchEvent(event) {
  var search_key = event.target.value;
  var json = event.data['param1'];
  returnFilteredRestaurantList(json, search_key);
}

function hideFilteredInstaPostsAndMarkers(restaurant_list, filtered_list) {
  var filtered_set = new Set(filtered_list);
  restaurants_to_hide = restaurant_list.filter(x => !filtered_set.has(x));

  hide_ids = restaurants_to_hide.map(restaurant => "#id" + restaurant.id + ",#marker" + restaurant.id).join()
  show_ids = filtered_list.map(restaurant => "#id" + restaurant.id + ",#marker" + restaurant.id).join()
  hide_targets = $(hide_ids)
  show_targets = $(show_ids)
  hide_targets.hide()
  show_targets.show()
}

function filterRestaurantList(restaurant, search_key) {
  var result_found = false;
  result_found = restaurant['address'].toLocaleLowerCase().includes(search_key.toLocaleLowerCase());
  return result_found;
}

function returnFilteredRestaurantList(restaurant_list, search_key) {
  filtered_list = restaurant_list.filter(restaurant => filterRestaurantList(restaurant, search_key));
  hideFilteredInstaPostsAndMarkers(restaurant_list, filtered_list);
}
