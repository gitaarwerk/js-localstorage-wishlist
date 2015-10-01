$(window).ready(function(){
	(function(){
		"use strict";
		
		Array.prototype.contains = function ( needle ) {
		   for (var i in this) {
			   if (this[i] == needle) return true;
		   }
		   return false;
		}
		
		var wishlistLocalStorageName = "coolblueWishlist",
		 wishlistContents = localStorage.getItem(wishlistLocalStorageName);

		 var wishListContainer = wishlistContents ? wishlistContents.split(",") : [];
				 		console.log(typeof wishListContainer)

		
		$(".js-wishlist--add").each(function(){
			var data = $(this).data("wishlistProduct");
			
			if (wishListContainer.contains(data) === true) {
				console.log("check")
				$(this).addClass("is-set")
			}
		});
		
		var updateWishlist = function(){
			var contents = "";
			for (var i=0; i < wishListContainer.length; i++) {
				contents += "Je opgeslagen product" + wishListContainer[i] + "<br>";
			};
			$(".js-wishlist").html(contents)
		};
		
		$(".js-wishlist--add").on("click", function(){
			var data = $(this).data("wishlistProduct");
			if (wishListContainer.contains(data) === false) {
				wishListContainer.push(data);
				localStorage.setItem(wishlistLocalStorageName, wishListContainer.join());
				$(this).addClass("is-set");
				updateWishlist();
			}
			else
			{
				alert("dit product zit al in je verlanglijst")
			}
		});
		
		updateWishlist();
		
		
	
	})();
	
	
});
