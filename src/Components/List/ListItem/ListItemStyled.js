import styled from 'styled-components';

const ListItemStyles = styled.div`
    .container {
        text-align: center;
        border: 1px blue solid;
        border-radius: 25px;
        padding: 1rem;
    }
    
    .row {
        .item-block {
            padding: 10px;
            justify-content: space-between;
    
        .item-description {
            padding-left: 5px;
            display: inline-block;
            vertical-align: middle;
            }
            
        a {
            display: inline-block;
            width: 125px !important;
            height: 30px;
            line-height: 30px;
            color: white;
            text-decoration: none;
            background-color: blue;
            border-radius: 5px;
            }
        }
    }
`;

export default ListItemStyles;
