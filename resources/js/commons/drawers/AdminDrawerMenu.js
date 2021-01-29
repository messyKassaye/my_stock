import React,{useState} from "react";
import ListItem from "@material-ui/core/ListItem";
import {Link} from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import withStyles from "@material-ui/core/styles/withStyles";
import authstyle from "../../auth/style/auth_style";
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Collapse from "@material-ui/core/Collapse";

function AdminDrawerMenu(props){ 
    const [prevState,setPrevState] = useState()
    const classes = authstyle()
    
   const  handleClick =( item )=>{
        setPrevState(item)
    }

   const  handler = ( children )=>{
        const classes = authstyle()
        const { state } = this
        return children.map( ( subOption ) => {
            if ( !subOption.children ) {
                return (
                    <div key={ subOption.name }>
                        <ListItem
                            button
                            component={Link}
                            to={subOption.route}
                            key={ subOption.name }>
                                <ListItemText
                                    inset
                                    primary={subOption.name}/>
                        </ListItem>
                    </div>
                )
            }
            return (
                <div key={ subOption.name } style={{height:'100%'}}>
                    <ListItem
                        button
                        onClick={ () => this.handleClick( subOption.name ) }>
                        <ListItemText
                            inset
                            primary={subOption.name} />
                        { state[ subOption.name ] ?
                            <ExpandLess /> :
                            <ExpandMore />
                        }
                    </ListItem>
                    <Collapse

                        in={ state[ subOption.name ] }
                        timeout="auto"
                        unmountOnExit
                    >
                        { this.handler( subOption.children ) }
                    </Collapse>
                </div>
            )
        } )
    }
   

    return <List style={{overflowY:'auto',backgroundColor:'transparent',marginTop:50}}>
    {props.menu.map((item) => (
        item.children
        ?
            (
                <div key={ item.name }>
                    <ListItem
                        button
                        onClick={ () => this.handleClick( item.name ) }
                        className={classes.parent}>
                        <ListItemIcon className={classes.icons}>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.name}/>
                        { this.state[ item.name ] ?
                            <ExpandLess /> :
                            <ExpandMore />
                        }
                    </ListItem>
                    <Collapse
                        className={classes.sub_menu}
                        in={ this.state[ item.name ] }
                        timeout="auto"
                        unmountOnExit
                    >
                        { this.handler( item.children ) }
                    </Collapse>
                </div>
            )
        :
            (
                <ListItem
                    button
                    component={Link}
                    to={item.route}
                    key={item.name}
                    className={classes.parent}>
                    <ListItemIcon style={{color: '#53607b'}}>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.name}/>
                </ListItem>
            )
    ))}
</List>


}

export default AdminDrawerMenu
