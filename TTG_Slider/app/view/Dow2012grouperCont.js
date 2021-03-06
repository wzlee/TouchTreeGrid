/*
 * File: app/view/Dow2012grouperCont.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('TouchTreeGrid.view.Dow2012grouperCont', {
    extend: 'Ext.Container',
    alias: 'widget.dow2012grouperCont',

    config: {
        itemId: 'dow2012grouperCont',
        layout: {
            type: 'card'
        },
        items: [
            {
                xtype: 'touchtreegrid',
                store: 'Dow2012grouper',
                columns: [
                    {
                        header: 'CloseDate',
                        dataIndex: 'CloseDate',
                        width: '25%',
                        style: 'text-align: left; font-weight: bold; color: #008abc;',
                        headerStyle: 'text-align: left; color: #ccc;',
                        renderer: 'Ext.Date.format(values.CloseDate, "n/j/Y")',
                        sortable: true
                    },
                    {
                        header: 'Close',
                        dataIndex: 'Close',
                        width: '20%',
                        style: 'text-align: right;font-weight: bold;',
                        headerStyle: 'text-align: right; padding-right: .5em !important; color: #ccc;',
                        renderer: 'this.formatNumbers(values.Close, 0)',
                        sortable: true
                    },
                    {
                        header: 'Chg',
                        dataIndex: 'Chg',
                        width: '20%',
                        style: 'text-align: right;font-weight: bold;',
                        headerStyle: 'text-align: right; padding-right: .5em !important; color: #ccc;',
                        renderer: 'this.renderer_formatWithColor(values.Chg, 0)',
                        sortable: true
                    },
                    {
                        header: 'Chg%',
                        dataIndex: 'ChgPct',
                        width: '20%',
                        style: 'text-align: right;font-weight: bold;',
                        headerStyle: 'text-align: right; padding-right: .5em !important; color: #ccc;',
                        renderer: 'this.renderer_formatWithColor(values.ChgPct, 2, "", "%")',
                        sortable: true
                    }
                ],
                listItemId: 'dow2012grouperlist',
                renderers: {
                    renderer_formatWithColor: function (value, decPlaces, prefix, suffix, thouSeparator, decSeparator)
                {var clr = (value >= 0) ? 'green' : 'red';
                return '<span style="color:' + clr + ';">' + this.formatNumbers(value, decPlaces, prefix, suffix, thouSeparator, decSeparator) +
                    '</span>';}
                },
                includeHeader: true,
                helpHtml: './resources/html/DOW2012grouperExample.html',
                simpleList: true,
                columnSorting: true,
                additionalListConfigs: {
                    grouped: true
                },
                cls: [
                    'x-touchtreegrid-list',
                    'x-touchtreegrid-list-dow2012-grouper'
                ],
                itemId: 'dow2012grouper'
            }
        ]
    }

});