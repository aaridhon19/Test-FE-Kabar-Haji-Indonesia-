import Swal from "sweetalert2";

export default function ButtonLogout({setIsLoggedIn}) {
  // Function to handle logout
  const handleLogout = () => {
    // Clear login status and redirect to login page
    Swal.fire({
      title: "Are You Sure?",
      text: "Logout!!!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "No",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      // Jika user menekan tombol Yes
      if (result.isConfirmed) {
        Swal.fire({
          title: "Logout!",
          text: "Success Logout.",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          // Hapus data login dari localStorage
          localStorage.removeItem("isLoggedIn");
          localStorage.removeItem("username");
          localStorage.removeItem("access_token");
          setIsLoggedIn(false);
          window.location.href = "/login";
        });
      }
    });
  };
  return (
    <div
      className="hover:bg-gray-200 p-4 cursor-pointer text-red-500"
      onClick={handleLogout}
    >
      Logout
    </div>
  );
}
