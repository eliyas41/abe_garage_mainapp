import React from "react";

const Orders = () => {
  return (
    <div>
      <h1>Orders Page</h1>

      <form action="http://localhost:7880/addiphones" method="post">
        <label for="name">iPhone ID:</label><br />
        <input type="text" name="iphoneId" />
        <br /><br />
        <label for="imgPath">iPhone image path:</label><br />
        <input type="text" name="imgPath" />
        <br /><br />
        <label for="iphoneLink">iPhone page link:</label><br />
        <input type="text" name="iphoneLink" />
        <br /><br />
        <label for="iphoneTitle">iPhone Title:</label><br />
        <input type="text" name="iphoneTitle" />
        <br /><br />
        <label for="StartPrice">Starting price:</label><br />
        <input type="text" name="StartPrice" />
        <br /><br />
        <label for="priceRange">Price range:</label><br />
        <input type="text" name="priceRange" />
        <br /><br />

        <label for="briefDescription">Brief Description:</label><br />
        <textarea name="briefDescription" cols="30" rows="10"></textarea>
        <br /><br />
        <label for="fullDescription">Full Description:</label><br />
        <textarea name="fullDescription" cols="30" rows="10"></textarea>
        <br /><br />
        <input type="submit" value="App iPhone" />
      </form>
    </div>
  );
}

export default Orders; 