const { gql, default: request } = require("graphql-request");

const getCategory = async () => {
  const query = gql`
    query Category {
      categories {
        id
        name
        icon {
          url
        }
      }
    }
  `;

  const result =  request(process.env.NEXT_PUBLIC_MASTER_URL_KEY,query)

  return result;
};

const getAllBusinessList = async()=>{
    const query = gql`query getAllBusinessList {
  businessLists {
    about
    address
    contactPerson
    id
    name
    images {
      url
    }
    category {
      name
      id
    }
  }
}`

const result = await request(process.env.NEXT_PUBLIC_MASTER_URL_KEY,query);
return result;
}

const getBusinessByCategory = async (category)=>{
  const query = gql`query getBusinessByCategory {
  businessLists(where: {category: {name: "${category}"}}) {
    about
    address
    category {
      name
    }
    contactPerson
    name
    id
    email
    images {
      url
    }
  }
}`

const result = await request(process.env.NEXT_PUBLIC_MASTER_URL_KEY,query);
return result;
}

const getBusinessById = async(id) =>{
  const query = gql`query getBusinessDetails {
  businessList(where: {id: "${id}"}) {
    about
    address
    category {
      name
    }
    contactPerson
    email
    id
    name
    images {
      url
    }
  }
}`

const result = await request(process.env.NEXT_PUBLIC_MASTER_URL_KEY,query);
return result;
}

const createNewBooking = async(businessId,date,time,userEmail,userName)=>{
  const mutationQuery = gql`mutation CreateBooking {
  createBooking(
    data: {bookingStatus: booked, businessList: {connect: {id: "`+businessId+`"}}, date: "`+date+`", time: "`+time+`", userEmail: "`+userEmail+`", userName: "`+userName+`"}
  ) {
    id
  }
    publishManyBookings(to: PUBLISHED) {
    count
  }
}`

const result = await request(process.env.NEXT_PUBLIC_MASTER_URL_KEY,mutationQuery);
return result;
}

const businessBookedSlot = async(businessId,date)=>{
  const query = gql`query BusinessBookedSlot {
  bookings(where: {businessList: {id: "`+businessId+`"}, date: "`+date+`"}) {
    date
    time
  }
}`

const result = await request(process.env.NEXT_PUBLIC_MASTER_URL_KEY,query);
return result;
}

const getUserBookingHistory = async(userEmail)=>{
  const query = gql`query GetUserBookingsHistory {
  bookings(where: {userEmail: "`+userEmail+`"}orderBy:publishedAt_DESC) {
    businessList {
      name
      images {
        url
      }
      contactPerson
      address
    }
    date
    time
  }
}`

const result = await request(process.env.NEXT_PUBLIC_MASTER_URL_KEY,query);
return result;
}

export default {getCategory,getAllBusinessList,getBusinessByCategory,getBusinessById,createNewBooking, businessBookedSlot, getUserBookingHistory}