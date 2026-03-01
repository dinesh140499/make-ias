const useShare = () => {
    const sharePage = () => {
        console.log(navigator)
      if (navigator.share) {
        navigator.share({
          title: document.title,
          text: "Check out this page!",
          url: window.location.href,
        }).catch((error) => console.error("Share failed:", error));
      } else {
        alert("Sharing not supported on this browser.");
      }
    };
  
    return sharePage;
  };
  
  export default useShare;
  