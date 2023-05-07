import React,{useEffect,useState} from "react";
import Navbar from "../components/Navbar";
import Button from "@material-ui/core/Button";
import { useStyles } from "../components/Styles";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import {getRole} from '../assets/roleConfig'
import * as supplyChain from "../assets/supply-chain-and-shipping.json";
import Lottie from "react-lottie";
import { getData } from "../utils/fbutils";

const suppChainLoader = {
  loop: true,
  autoplay: true,
  animationData: supplyChain,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};



export default function Home() {
  useEffect(()=>{
    const data = getData();
    console.log(data);
  },[])
  const classes = useStyles();
  const [loaderSize, setLoaderSize] = useState(520);
  const navItem = [];
  

  return (
    <>
      <div className={classes.pageWrap}>
        <Navbar navItems={navItem}>
          <Grid
            container
            spacing={3}
            style={{ height: "100%", minHeight: "90vh", width: "100%" }}
          >
            <Grid
              item
              xs={12}
              sm={6}
              style={{
                minHeight: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              {/* <img
                alt="."
                src="/homeArt.png"
                style={{ width: "90%", height: "auto" }}
              /> */}
              <Lottie
                options={suppChainLoader}
                height="auto"
                width="90%"
              />
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              style={{
                minHeight: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                flexDirection: "column",
              }}
            >
              <div className={classes.HomeCardWrap}>
                <h1 className={classes.pageHeading}>Assign Roles</h1>
                <Link
                  to="/roleAdmin"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <Button
                    className={classes.HomeBtn}
                    size="large"
                    variant="outlined"
                    color="primary"
                  >
                    Assign
                  </Button>
                </Link>
                <br />

                <h1 className={classes.pageHeading}>Visit As</h1>
                <Link
                  to="/SalesRep"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <Button
                    className={classes.HomeBtn}
                    size="large"
                    variant="outlined"
                    color="primary"
                  >
                    {getRole(1)[0].name}
                  </Button>
                </Link>
                <Link
                  to="/PurchaseOrderAgent"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <Button
                    className={classes.HomeBtn}
                    size="large"
                    variant="outlined"
                    color="primary"
                  >
                    {getRole(2)[0].name}
                  </Button>
                </Link>
                <Link
                  to="/ThirdPartyVendor"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <Button
                    className={classes.HomeBtn}
                    size="large"
                    variant="outlined"
                    color="primary"
                  >
                    {getRole(3)[0].name}
                  </Button>
                </Link>
                <Link
                  to="/WarehouseManager"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <Button
                    className={classes.HomeBtn}
                    size="large"
                    variant="outlined"
                    color="primary"
                  >
                    {getRole(4)[0].name}
                  </Button>
                </Link>
                <Link
                  to="/FinanceManager"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <Button
                    className={classes.HomeBtn}
                    size="large"
                    variant="outlined"
                    color="primary"
                  >
                    {getRole(5)[0].name}
                  </Button>
                </Link>
                <Link
                  to="/ProductionManager"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <Button
                    className={classes.HomeBtn}
                    size="large"
                    variant="outlined"
                    color="primary"
                  >
                    {getRole(6)[0].name}
                  </Button>
                </Link>
                <Link
                  to="/BatchManager"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <Button
                    className={classes.HomeBtn}
                    size="large"
                    variant="outlined"
                    color="primary"
                  >
                    {getRole(7)[0].name}
                  </Button>
                </Link>
                <Link
                  to="/LogisticsManager"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <Button
                    className={classes.HomeBtn}
                    size="large"
                    variant="outlined"
                    color="primary"
                  >
                    {getRole(8)[0].name}
                  </Button>
                </Link>

              </div>
            </Grid>
          </Grid>
        </Navbar>
      </div>
    </>
  );
}
