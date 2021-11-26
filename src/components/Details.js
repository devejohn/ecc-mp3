import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CheckIcon from "@material-ui/icons/Check";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { Link } from "./../util/router";
import { useAuth } from "./../util/auth";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: theme.spacing(3),
  },
  price: {
    display: "flex",
    alignItems: "baseline",
  },
  listItem: {
    paddingTop: 2,
    paddingBottom: 2,
  },
  perkIcon: {
    minWidth: 34,
    color: theme.palette.success.main,
  },
}));

function Details(props) {
  const classes = useStyles();

  const auth = useAuth();

  const items = [
    {
      id: "Donation",
      name: "For a small donation of",
      price: "20",
      perks: [
        "Lorem ipsum dolor sit amet",
        "Consectetur adipiscing elit",
        "Integer molestie lorem at massa",
      ],
    },
  ];

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={3}
          textAlign="center"
        />
        <Grid container={true} justifyContent="center" spacing={4}>
          {items.map((item, index) => (
            <Grid item={true} xs={12} md={6} key={index}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography variant="h6" component="h2">
                    {item.name}
                  </Typography>
                  <Box className={classes.price} mt={1}>
                    <Typography variant="h3">${item.price}</Typography>
                    <Typography variant="h4" color="textSecondary" />
                  </Box>

                  {item.description && (
                    <Box mt={2}>
                      <Typography component="p" color="textSecondary">
                        {item.description}
                      </Typography>
                    </Box>
                  )}

                  {item.perks && (
                    <Box mt={1}>
                      <List aria-label="perks">
                        {item.perks.map((perk, index) => (
                          <ListItem
                            className={classes.listItem}
                            disableGutters={true}
                            key={index}
                          >
                            <ListItemIcon className={classes.perkIcon}>
                              <CheckIcon />
                            </ListItemIcon>
                            <ListItemText>{perk}</ListItemText>
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  )}

                  <Box mt="auto" pt={3}>
                    <Button
                      component={Link}
                      to={
                        auth.user
                          ? `/donation/${item.id}`
                          : `/auth/signup?next=/donation/${item.id}`
                      }
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth={true}
                    >
                      Donate
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default Details;
