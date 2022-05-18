const apiKey =  "TOP-SECRET";
const corsAnywhere = "https://cors-anywhere.herokuapp.com/";
export default async function searchYelp(term, location, sortBy) {

  const url = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;

  const data = await fetch(`${corsAnywhere}${url}`, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });

  const response = await data.json();
  if (response) {
    const businesses = response.businesses.map((business) => {
      return {
        id: business.id,         
        imageSrc: business.image_url,
        name: business.name,
        address: business.location.address1,
        city: business.location.city,
        state: business.location.state,
        zipCode: business.location.zip_code,
        category: business.categories,
        rating: business.rating,
        reviewCount: business.review_count
      }
    })

    return businesses
  } else {
    throw new Error("Request failed!");
  }
}