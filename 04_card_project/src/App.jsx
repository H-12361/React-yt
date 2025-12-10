import React from "react";
import Card from "./Component/Card";


function App() {
      const jobsopening = [
  {
    brandLogo: "https://imgs.search.brave.com/mmCJdWAtZd0PzTyhdIZgWgy4Ii5P3AHPyKaGfmHaZEg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9mcmVl/cG5nbG9nby5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTcyMzgwOTA5/N21ldGEtbG9nby13/aXRoLXRleHQucG5n",
    companyName: "Meta",
    postedAgo: "5 days ago",
    tag1: "Full-time",
    tag2: "On-site",
    pay: "$70 - $100",
    location: "Delhi"
  },
  {
    brandLogo: "https://imgs.search.brave.com/UK2eInEP5lpu78FXGAeZSGNJsnzId8tLxHgDv5P60_E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Q0Lzlm/L2EzL2Q0OWZhMzUy/M2M4NGJlZjc2NmI0/YjJiZGU4Mjk2ZDIz/LmpwZw",
    companyName: "Amazon",
    postedAgo: "3 days ago",
    tag1: "Part-time",
    tag2: "Remote",
    pay: "$50 - $80",
    location: "Hyderabad"
  },
  {
    brandLogo: "https://imgs.search.brave.com/wMHSqLVhGkbps4Z4ynarzbSA6rr98Q2SFim5d4C76Z0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9hcHBs/ZS1sb2dvLXdoaXRl/LWNvbG9yLWJyYW5k/LWZyb250LXN0b3Jl/LWxhcy12ZWdhcy0x/MjA0NDYwMzAuanBn",
    companyName: "Apple",
    postedAgo: "7 days ago",
    tag1: "Full-time",
    tag2: "Hybrid",
    pay: "$90 - $100",
    location: "Kolkata"
  },
  {
    brandLogo: "https://imgs.search.brave.com/FvKJWm5l2c5n-uCK4ixGzPCn_R9gK7xWa9bHIjF-IKg/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEwLzcxLzUxLzc1/LzM2MF9GXzEwNzE1/MTc1ODFfWVhJc1VX/UFFHQk9zSnEwN0JL/azB5OHA2RWJYcnVa/dTcuanBn",
    companyName: "Netflix",
    postedAgo: "1 day ago",
    tag1: "Full-time",
    tag2: "Remote",
    pay: "$60 - $90",
    location: "Delhi"
  },
  {
    brandLogo: "https://imgs.search.brave.com/vgyIh0TbKxPNSu2j2PaXLnYOyFFuLCMYlBf_fL71sOI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzUv/NzQ2LzA1Ni9zbWFs/bC9nb29nbGUtYXBw/LWxvZ28taW4tYmln/LXN1ci1zdHlsZS0z/ZC1yZW5kZXItaWNv/bi1kZXNpZ24tY29u/Y2VwdC1lbGVtZW50/LWlzb2xhdGVkLXRy/YW5zcGFyZW50LWJh/Y2tncm91bmQtZnJl/ZS1wbmcucG5n",
    companyName: "Google",
    postedAgo: "4 days ago",
    tag1: "Part-time",
    tag2: "On-site",
    pay: "$50 - $70",
    location: "Hyderabad"
  },
  {
    brandLogo: "https://imgs.search.brave.com/YnphAPn0DoQYpg9NCju9hMXzA-123V43dB3bFKcggJY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjAv/MTkwLzU5OC9zbWFs/bC9taWNyb3NvZnQt/bG9nby1taWNyb3Nv/ZnQtaWNvbi1mcmVl/LWZyZWUtdmVjdG9y/LmpwZw",
    companyName: "Microsoft",
    postedAgo: "6 days ago",
    tag1: "Full-time",
    tag2: "Remote",
    pay: "$80 - $100",
    location: "Kolkata"
  },
  {
    brandLogo: "https://imgs.search.brave.com/RuqGqICOUNfVopTXwwJ_N2rARCFY67DkXT7u2eLY_LQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mYWJy/aWticmFuZHMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9BZG9i/ZS1Mb2dvLUhpc3Rv/cnktNC0xMjAweDc1/MC5wbmc",
    companyName: "Adobe",
    postedAgo: "2 days ago",
    tag1: "Part-time",
    tag2: "Hybrid",
    pay: "$55 - $75",
    location: "Delhi"
  },
  {
    brandLogo: "https://imgs.search.brave.com/bYeKmsaj-g1lxKKHwHJjfVHPkjz7JlgzTog79dww3s0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L2libS1sb2dvLXBu/Zy9pYm0tbG9nby1h/Y20taWNwYy1rYW5w/dXItc2l0ZS0wLnBu/Zw",
    companyName: "IBM",
    postedAgo: "5 days ago",
    tag1: "Full-time",
    tag2: "On-site",
    pay: "$65 - $95",
    location: "Hyderabad"
  },
  {
    brandLogo: "https://imgs.search.brave.com/dTQ6xaXpscTSlArS0hueaMeuILOraP4_ZPUD8_f5YFg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWludGVsLTI4MjEx/OC5wbmc_Zj13ZWJw/Jnc9MjU2",
    companyName: "Intel",
    postedAgo: "3 days ago",
    tag1: "Part-time",
    tag2: "Remote",
    pay: "$50 - $60",
    location: "Kolkata"
  },
  {
    brandLogo: "https://imgs.search.brave.com/OreD1wqWBvOEuhLd8K-d8CCFS0D0nelTNAbelNDqQSY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/LnN2Z2Nkbi5jb20v/bG9nb3Mvb3JhY2xl/LnBuZw",
    companyName: "Oracle",
    postedAgo: "8 days ago",
    tag1: "Full-time",
    tag2: "On-site",
    pay: "$70 - $100",
    location: "Delhi"
  }
];
console.log(jobsopening)

  return (
    <>
      <div className="parent">
        {jobsopening.map(function(element,index){
          return <div key={index}>
            <Card company={element.companyName} post={element.postedAgo} tag1={element.tag1} tag2={element.tag2}  pay={element.pay} location={element.location} brandLogo={element.brandLogo}/>
          </div>
        })}
       
      </div>
    </>
  );
}

export default App;
