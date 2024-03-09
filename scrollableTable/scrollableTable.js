import { LightningElement } from 'lwc';
const COLUMNS = [
    {
      "type": "action",
      "typeAttributes": {
        "rowActions": [
          {
            "label": "Manage Account Team",
            "name": "manageAccountTeam"
          }
        ]
      },
      "colClassName": "fix-col",
      "rowClassName":"slds-cell_action-mode fix-col"
    },
    {
      "label": "Account Name",
      "fieldName": "accountName",
      "type": "button",
      "sortable": "true",
      "hideDefaultActions": true,
      "exportable": true,
      "allowFilter": true,
      "typeAttributes": {
        "label": {
          "fieldName": "accountName"
        },
        "variant": "base",
        "name": "openAccount",
        "class": "ads-territory-planner-datatable-button"
      },
      "cellAttributes": {
        "class": "slds-p-vertical_none slds-m-vertical_none "
      },
      "colClassName": "fix-col",
      "rowClassName":"slds-cell_action-mode fix-col"
    },
    {
      "label": "Ultimate Parent Account",
      "fieldName": "accountUltimateParent",
      "type": "button",
      "sortable": "true",
      "hideDefaultActions": true,
      "exportable": true,
      "typeAttributes": {
        "label": {
          "fieldName": "accountUltimateParent"
        },
        "variant": "base",
        "name": "openUltimateParent",
        "class": "ads-territory-planner-datatable-button"
      },
      "cellAttributes": {
        "class": "slds-p-vertical_none slds-m-vertical_none "
      },
      "colClassName": "fix-col",
      "rowClassName":"slds-cell_action-mode fix-col"
    },
    {
      "label": "Recommendation Details",
      "fieldName": "Name",
      "type": "button",
      "sortable": "true",
      "hideDefaultActions": true,
      "exportable": true,
      "typeAttributes": {
        "label": "View",
        "variant": "base",
        "name": "openRecommendation",
        "class": "ads-territory-planner-datatable-button"
      },
      "cellAttributes": {
        "class": "slds-p-vertical_none slds-m-vertical_none "
      },
      "colClassName": "fix-col",
      "rowClassName":"slds-cell_action-mode fix-col"
    },
    {
      "label": "Vertical",
      "fieldName": "Vertical_c",
      "type": "text",
      "sortable": "true",
      "hideDefaultActions": true,
      "exportable": true,
      "allowFilter": true,
    },
    {
      "label": "Sub Vertical",
      "fieldName": "Subverticalc",
      "type": "text",
      "sortable": "true",
      "hideDefaultActions": true,
      "exportable": true,
      "allowFilter": true
    },
    {
      "label": "Status",
      "fieldName": "Statusc",
      "type": "text",
      "sortable": "true",
      "hideDefaultActions": true,
      "exportable": true,
      "allowFilter": true
    },
    {
      "label": "Transition Type",
      "fieldName": "Transition_Typec",
      "type": "text",
      "sortable": "true",
      "hideDefaultActions": true,
      "exportable": true,
      "allowFilter": true
    },
    {
      "label": "Future Account Team",
      "type": "accountTeam",
      "typeAttributes": {
        "accountTeamMembers": {
          "fieldName": "Future_Year_Account_Teamsr"
        }
      },
      "hideDefaultActions": true,
      "exportable": true,
      "initialWidth": 300
    },
    {
      "label": "Future Account Owner",
      "fieldName": "futureOwner",
      "type": "text",
      "sortable": "true",
      "hideDefaultActions": true,
      "exportable": true,
      "allowFilter": true
    },
    {
      "label": "Future Sales Manager",
      "fieldName": "futureManager",
      "type": "text",
      "sortable": "true",
      "hideDefaultActions": true,
      "exportable": true,
      "allowFilter": true
    },
    {
      "label": "Current Owner",
      "fieldName": "currentOwner",
      "type": "text",
      "sortable": "true",
      "hideDefaultActions": true,
      "exportable": true,
      "allowFilter": true
    },
    {
      "label": "Current Sales AM",
      "fieldName": "currentSalesAM",
      "type": "text",
      "sortable": "true",
      "hideDefaultActions": true,
      "exportable": true,
      "allowFilter": true
    },
    {
      "label": "Current Sales GPM",
      "fieldName": "Current_Sales_GPMc",
      "type": "text",
      "sortable": "true",
      "hideDefaultActions": true,
      "exportable": true,
      "allowFilter": true
    },
    {
      "label": "Current Sales Manager",
      "fieldName": "currentManager",
      "type": "text",
      "sortable": "true",
      "hideDefaultActions": true,
      "exportable": true,
      "allowFilter": true
    },
    {
      "label": "Current Service Level",
      "fieldName": "currentLOS",
      "type": "text",
      "sortable": "true",
      "hideDefaultActions": true,
      "exportable": true
    },
    {
      "label": "Final Sales Team",
      "fieldName": "Final_Sales_Teamc",
      "type": "text",
      "sortable": "true",
      "hideDefaultActions": true,
      "exportable": true,
      "allowFilter": false
    },
    {
      "label": "Final Sales Subteam",
      "fieldName": "Final_Sales_Subteamc",
      "type": "text",
      "sortable": "true",
      "hideDefaultActions": true,
      "exportable": true,
      "allowFilter": false
    },
    {
      "label": "Final Level of Service",
      "fieldName": "Level_of_Service_After_Exceptionsc",
      "type": "text",
      "sortable": "true",
      "hideDefaultActions": true,
      "exportable": true
    },
    {
      "label": "Cross Border Country",
      "fieldName": "crossBorderCountry",
      "type": "text",
      "sortable": "true",
      "hideDefaultActions": true,
      "exportable": true
    },
    {
      "label": "Locale",
      "fieldName": "accountLocale",
      "type": "text",
      "sortable": "true",
      "hideDefaultActions": true,
      "allowFilter": true,
      "exportable": true
    },
    {
      "label": "State",
      "fieldName": "state",
      "type": "text",
      "sortable": "true",
      "hideDefaultActions": true,
      "allowFilter": false,
      "exportable": true
    },
    {
      "label": "Sub Region",
      "fieldName": "subregion",
      "type": "text",
      "sortable": "true",
      "hideDefaultActions": true,
      "allowFilter": false,
      "exportable": true
    },
    {
      "label": "TTM Sponsored Ads Revenue (Parent)",
      "fieldName": "TTM_Sponsored_Ads_Revenue_Parentc",
      "sortable": "true",
      "type": "number",
      "hideDefaultActions": true,
      "exportable": true
    },
    {
      "label": "TTM DVA DSP-SS Revenue (Child)",
      "fieldName": "TTM_DVA_DSP_SS_Revenue_Childc",
      "sortable": "true",
      "type": "number",
      "hideDefaultActions": true,
      "exportable": true
    },
    {
      "label": "TTM DVA Revenue (Child)",
      "fieldName": "TTM_DVA_Revenue_Childc",
      "sortable": "true",
      "type": "number",
      "hideDefaultActions": true,
      "exportable": true
    },
    {
      "label": "TTM Sponsored Ads Revenue (Child)",
      "fieldName": "TTM_Sponsored_Ads_Revenue_Childc",
      "sortable": "true",
      "type": "number",
      "hideDefaultActions": true,
      "exportable": true
    },
    {
      "label": "TTM Sponsored Brand Revenue (Child)",
      "fieldName": "TTM_Sponsored_Brand_Revenue_Childc",
      "sortable": "true",
      "type": "number",
      "hideDefaultActions": true,
      "exportable": true
    },
    {
      "label": "TTM Sponsored Display (Child)",
      "fieldName": "TTM_Sponsored_Display_Revenue_Childc",
      "sortable": "true",
      "type": "number",
      "hideDefaultActions": true,
      "exportable": true
    },
    {
      "label": "TTM Sponsored Product (Child)",
      "fieldName": "TTM_Sponsored_Product_Childc",
      "sortable": "true",
      "type": "number",
      "hideDefaultActions": true,
      "exportable": true
    },
    {
      "label": "TTM STV Revenue (Child)",
      "fieldName": "TTM_STV_Childc",
      "sortable": "true",
      "type": "number",
      "hideDefaultActions": true,
      "exportable": true
    },
    {
      "label": "TTM Twitch Revenue (Child)",
      "fieldName": "TTM_Twitch_Childc",
      "sortable": "true",
      "type": "number",
      "hideDefaultActions": true,
      "exportable": true
    },
    {
      "label": "TTM DVA Managed Services Revenue (Child)",
      "fieldName": "TTM_DVA_Managed_Services_Revenue_Childc",
      "sortable": "true",
      "type": "number",
      "hideDefaultActions": true,
      "exportable": true
    },
    {
      "label": "TTM Seller GMS - % Brand Owner (Child)",
      "fieldName": "TTM_Seller_GMS_Brand_Owner_Childc",
      "sortable": "true",
      "type": "percent",
      "hideDefaultActions": true,
      "exportable": true
    },
    {
      "label": "TTM Toal Revenue (Child)",
      "fieldName": "TTM_Total_Revenue_Childc",
      "sortable": "true",
      "type": "number",
      "hideDefaultActions": true,
      "exportable": true
    },
    {
      "label": "TTM GMS (Child)",
      "fieldName": "TTM_Total_GMS_Childc",
      "sortable": "true",
      "type": "number",
      "hideDefaultActions": true,
      "exportable": true
    },
    {
      "label": "T6M Sponsored Ads Revenue (Child)",
      "fieldName": "t6m_sponsored_ads_revenue_childc",
      "sortable": "true",
      "type": "number",
      "hideDefaultActions": true,
      "exportable": true
    },
    {
      "label": "TAMS Estimate",
      "fieldName": "Total_Adressable_Media_Spend_Est_Childc",
      "sortable": "true",
      "type": "number",
      "hideDefaultActions": true,
      "exportable": true
    },
    {
      "label": "% YoY GMS Growth (Child)",
      "fieldName": "YoY_GMS_Growth_Child_c",
      "sortable": "true",
      "type": "percent",
      "hideDefaultActions": true,
      "exportable": true
    },
    {
      "label": "Tags",
      "fieldName": "accountTags",
      "type": "text",
      "sortable": "true",
      "hideDefaultActions": true,
      "allowFilter": true,
      "exportable": true,
      "wrapText": true
    }
  ]
const RESPONSE = 
[
  {
    "Id": "a5zHn0000015gKmIAI",
    "Name": "a5zHn0000015gKm",
    "Entity_ID__c": "0011E00001pyIAcQAM",
    "Sales_Team__c": "Performance",
    "Sales_Subteam__c": "US-West",
    "Locale__c": "US",
    "Final_Segmentation__c": "Growth Account",
    "Status__c": "Resegmented",
    "Entity_Name__c": "Kozyard LLC - US",
    "Segment_Owner__c": "005800000089mucAAA",
    "Model_Recommended_Level_Of_Service__c": "Full Funnel (Silver)",
    "Ultimate_Parent_Name__c": "Kozyard LLC - US",
    "Ultimate_Parent_ID__c": "0011E00001iMxR3QAK",
    "Vertical__c": "Hardlines",
    "Subvertical__c": "Home and Garden - Outdoor",
    "TTM_Total_GMS_Child__c": 10660265.79,
    "TTM_Total_Revenue_Child__c": 899068.6,
    "TTM_Sponsored_Brand_Revenue_Child__c": 59231.52,
    "TTM_Sponsored_Display_Revenue_Child__c": 235432.65,
    "TTM_Sponsored_Product_Child__c": 604404.43,
    "TTM_DVA_DSP_SS_Revenue_Child__c": 0,
    "Transition_Type__c": "Performance to Full Funnel",
    "Model_Recommended_Segmentation__c": "Growth Account",
    "YoY_GMS_Growth_Child__c": -0.126249436,
    "TTM_Seller_GMS_Brand_Owner_Child__c": 1,
    "TTM_Total_Ads_excl_SP_Revenue_Child__c": 294664.17,
    "TTM_DVA_Managed_Services_Revenue_Child__c": 0,
    "t6m_sponsored_ads_revenue_child__c": 392464.36,
    "Signed_Annual_Plan__c": "N",
    "Current_Level_of_Service__c": "Bronze",
    "Current_Sales_Manager_lookup__c": "0051E00000GnN67QAF",
    "Current_Owner__c": "0051E00000HHMWfQAP",
    "Total_Addr_Media_Spend_Est_Parent__c": 0,
    "Sibling_Seg_Rec__c": "a5zHn0000017mnBIAQ",
    "Final_Sales_Team__c": "HARDLINES",
    "Final_Sales_Subteam__c": "WIRELESS-PC",
    "TTM_Sponsored_Ads_Revenue_Parent__c": 663635.95,
    "TTM_DVA_Revenue_Child__c": 235432.65,
    "TTM_Sponsored_Ads_Revenue_Child__c": 663635.95,
    "TTM_STV_Child__c": 0,
    "TTM_Twitch_Child__c": 0,
    "Level_of_Service_After_Exceptions__c": "Full Funnel (Silver)",
    "Entity_ID__r": {
      "Name": "Kozyard LLC - US",
      "OwnerId": "0051E00000HHMWfQAP",
      "Sales_Manager__c": "0051E00000GnN67QAF",
      "Market__c": "US",
      "Ultimate_Parent_Formula__c": "Kozyard LLC - Global",
      "Vertical__c": "Hardlines",
      "Sub_Vertical__c": "Home and Garden - Outdoor",
      "Segment__c": "Bronze",
      "Ultimate_Parent_Account__c": "0011E00001iMxR3QAK",
      "Id": "0011E00001pyIAcQAM",
      "Owner": {
        "Name": "Ally Mundy",
        "Id": "0051E00000HHMWfQAP"
      },
      "Sales_Manager__r": {
        "Name": "Kevin Rodgers",
        "Id": "0051E00000GnN67QAF"
      }
    },
    "Segment_Owner__r": {
      "Name": "Brian Karlin",
      "Id": "005800000089mucAAA"
    },
    "Current_Sales_Manager_lookup__r": {
      "Name": "Kevin Rodgers",
      "Id": "0051E00000GnN67QAF"
    },
    "Current_Owner__r": {
      "Name": "Ally Mundy",
      "Id": "0051E00000HHMWfQAP"
    },
    "Sibling_Seg_Rec__r": {
      "Level_of_Service_After_Exceptions__c": "Partner-Enabled",
      "Id": "a5zHn0000017mnBIAQ"
    },
    "accountName": "Kozyard LLC - US",
    "currentOwner": "Ally Mundy",
    "currentManager": "Kevin Rodgers",
    "futureManager": "Brian Karlin",
    "statusColor": "slds-text-color_weak slds-text-title_bold",
    "currentLOS": "Bronze",
    "accountUltimateParent": "Kozyard LLC - Global",
    "accountLocale": "US",
    "currentOwnerOnRecommendation": "Ally Mundy",
    "currentManagerOnRecommendation": "Kevin Rodgers",
    "siblingFinalLevelOfService": "Partner-Enabled",
    "Future_Year_Account_Teams__r": []
  },
  {
    "Id": "a5zHn0000015gLCIAY",
    "Name": "a5zHn0000015gLC",
    "Entity_ID__c": "0011E00001iYSgQQAW",
    "Future_AE__c": "0051E00000GnUaoQAF",
    "Locale__c": "US",
    "Final_Segmentation__c": "Growth Account",
    "Status__c": "New",
    "Entity_Name__c": "ANQIER - US",
    "Segment_Owner__c": "005800000089mucAAA",
    "Model_Recommended_Level_Of_Service__c": "Performance Tier 2 (Copper)",
    "Ultimate_Parent_Name__c": "ANQIER - CN",
    "Ultimate_Parent_ID__c": "0011E00001iXutBQAS",
    "Vertical__c": "Softlines",
    "Subvertical__c": "Apparel",
    "TTM_Total_GMS_Child__c": 661097.78,
    "TTM_Total_Revenue_Child__c": 124222.79,
    "TTM_Sponsored_Brand_Revenue_Child__c": 0,
    "TTM_Sponsored_Display_Revenue_Child__c": 0,
    "TTM_Sponsored_Product_Child__c": 124222.79,
    "TTM_DVA_DSP_SS_Revenue_Child__c": 0,
    "Transition_Type__c": "Unmanaged to GGS",
    "Model_Recommended_Segmentation__c": "Growth Account",
    "YoY_GMS_Growth_Child__c": 1.445816727,
    "TTM_Seller_GMS_Brand_Owner_Child__c": 1,
    "TTM_Total_Ads_excl_SP_Revenue_Child__c": 0,
    "TTM_DVA_Managed_Services_Revenue_Child__c": 0,
    "t6m_sponsored_ads_revenue_child__c": 18742.9,
    "Signed_Annual_Plan__c": "N",
    "Current_Level_of_Service__c": "None",
    "Current_Owner__c": "0051E00000Gne1sQAB",
    "Total_Addr_Media_Spend_Est_Parent__c": 0,
    "Sibling_Seg_Rec__c": "a5zHn0000017JI2IAM",
    "Final_Sales_Team__c": "HARDLINES",
    "Final_Sales_Subteam__c": "WIRELESS-PC",
    "TTM_Sponsored_Ads_Revenue_Parent__c": 344180.46,
    "TTM_DVA_Revenue_Child__c": 0,
    "TTM_Sponsored_Ads_Revenue_Child__c": 124222.79,
    "TTM_STV_Child__c": 0,
    "TTM_Twitch_Child__c": 0,
    "Level_of_Service_After_Exceptions__c": "Performance Tier 2 (Copper)",
    "Segmentation_Exceptions__r": [
      {
        "Segmentation_Recommendation__c": "a5zHn0000015gLCIAY",
        "Id": "a6CRS0000000YuX2AU",
        "Case__c": "500RS0000044CpuYAE",
        "Case__r": {
          "Status": "Submitted",
          "Id": "500RS0000044CpuYAE"
        }
      }
    ],
    "Entity_ID__r": {
      "Name": "ANQIER - US",
      "OwnerId": "0051E00000Gne1sQAB",
      "Market__c": "US",
      "Ultimate_Parent_Formula__c": "ANQIER - CN",
      "Vertical__c": "Softlines",
      "Sub_Vertical__c": "Apparel",
      "Cross_Border_Country__c": "CN",
      "Segment__c": "None",
      "Ultimate_Parent_Account__c": "0011E00001iXutBQAS",
      "Id": "0011E00001iYSgQQAW",
      "Owner": {
        "Name": "Data Ma"
      }
    },
    "Segment_Owner__r": {
      "Name": "Brian Karlin",
      "Id": "005800000089mucAAA"
    }
  }
]
export default class ScrollableTable extends LightningElement {

     tableColumns = COLUMNS
        tableData = RESPONSE
    //  connectedCallback(){
    //     this.generateFlatColumns()
    //  }


    //  generateFlatColumns(){

    //  }

    handleRowAction(){
        
    }
}