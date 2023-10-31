// Initialize and add the map
function initMap(): void {
  // The location of ju
  const ju = { lat: 26.7755, lng: 75.8775 };
  // The map, centered at ju
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 4,
      center: ju,
    }
  );

  // The marker, positioned at ju
  const marker = new google.maps.Marker({
    position: ju,
    map: map,
  });
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;