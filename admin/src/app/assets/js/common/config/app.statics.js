const collator = new Intl.Collator('es-ES', { numeric: true, sensitivity: 'base' })

angular
  .module('app.statics', [])
  .constant('InvoiceTypes', {
    WORK_CLIENT_INVOICE: '0',
    CLIENT_INVOICE: '1',
    PROVIDER_INVOICE: '2',
    DELIVERY_NOTE_PROVIDER_INVOICE: '3'
  })
  .constant('WithholdingTaxTypes', [
    {id: 0, name: 'Sin retención'},
    {id: 1, name: 'Módulos o Actividades Ganaderas'},
    {id: 2, name: 'Sector Agrario'},
    {id: 7, name: 'Profesionales en los dos primeros años de actividad'},
    {id: 15, name: 'Profesionales'},
    {id: 19, name: 'Alquileres o Intereses (capital inmobiliario)'},
    {id: 2.8, name: 'Profesionales en los dos primeros años de actividad (Ceuta y Melilla)'},
    {id: 6, name: 'Profesionales (de Ceuta y Melilla)'},
    {id: 7.6, name: 'Alquiler (Ceuta y Melilla'}
  ])
  .constant('BudgetStates', {
    PROGRESS: 1,
    PENDING: 2,
    CONTRACTED: 3,
    UNCONTRACTED: 4,
  })
  .constant('BudgetFilters', [
    {
      name: 'CLIENT',
      translate: 'budgets.fields.client',
    }, {
      name: 'STATE',
      translate: 'budgets.fields.state',
    }, {
      name: 'RESPONSIBLE',
      translate: 'budgets.fields.responsible',
    }, {
      name: 'ACTIVITY',
      translate: 'budgets.fields.activity',
    }, {
      name: 'CREATED_FROM',
      translate: 'general.filters.createdFrom',
    }, {
      name: 'CREATED_TO',
      translate: 'general.filters.createdTo',
    },
  ])
  .constant('BudgetColumns', [
    {
      name: 'NUMBER',
      translate: 'budgets.fields.number',
      sortable: 'id',
    }, {
      name: 'TITLE',
      translate: 'budgets.fields.title',
      sortable: 'title',
    }, {
      name: 'CLIENT',
      translate: 'budgets.fields.client',
    }, {
      name: 'STATE',
      translate: 'budgets.fields.state',
      sortable: 'stateId',
    }, {
      name: 'RESPONSIBLE',
      translate: 'budgets.fields.responsible',
    }, {
      name: 'ACTIVITY',
      translate: 'budgets.fields.activity',
    },  {
      name: 'COST',
      translate: 'budgets.fields.cost',
    }, {
      name: 'SALE',
      translate: 'budgets.fields.sale',
    }, {
      name: 'CREATED_AT',
      translate: 'budgets.fields.createdAt',
      sortable: 'createdAt',
    }, {
      name: 'UPDATED_AT',
      translate: 'budgets.fields.updatedAt',
      sortable: 'updatedAt',
    }
  ])
  .constant('PersonnelType', {
    ADMINISTRADOR: 'ADMINISTRADOR',
    ADMINISTRATIVO: 'ADMINISTRATIVO',
    OPERARIO: 'OPERARIO',
    CLIENTE_EXTERNO: 'CLIENTE EXTERNO',
  })

  .constant('AdminType', {
    SUPERADMINISTRADOR: 'SUPERADMINISTRADOR',
    ADMINISTRADOR: 'ADMINISTRADOR',
  })

  .constant('URLS', {
    STATIC_GOOGLE_MAPS: 'https://maps.googleapis.com/maps/api/staticmap?',
    JEFE_OBRA: 'JEFE OBRA',
    ADMINISTRATIVO: 'ADMINISTRATIVO',
    OPERARIO: 'OPERARIO',
  })
  .constant('AssetExtraInfo', {
    amount: 5,
  })
  .constant('WoStates', {
    PLANNIFIED: {
      id: 2,
      class: 'plannified',
      name: 'Programada',
    },
    EXECUTED: {
      id: 3,
      class: 'executed',
      name: 'Ejecutada',
    },
    NO_EXECUTED: {
      id: 4,
      class: 'no-executed',
      name: 'No ejecutada',
    },
    TO_BILL: {
      id: 6,
      class: 'to-bill',
      name: 'Pdte facturar',
    },
    SUPERVISED: {
      id: 7,
      class: 'supervised',
      name: 'Supervisada',
    },
    CLOSED: {
      id: 8,
      class: 'closed',
      name: 'Cerrada',
    },
    PROGRESS: {
      id: 9,
      class: 'in-progress',
      name: 'En progreso',
    },
    PAUSE: {
      id: 10,
      class: 'in-pause',
      name: 'En pausa',
    },
    PENDING: {
      id: 11,
      class: 'pending',
      name: 'Pendiente',
    },
  })

  .constant('ExtraPersonnelType', {
    WATCHS: {
      id: 'watchs',
      name: 'Guardia',
    },
    VACATIONS: {
      id: 'vacations',
      name: 'Vacaciones',
    },
    LOW_LABOR: {
      id: 'low labor',
      name: 'Baja Laboral',
    },
    PERSONAL_MATTERS: {
      id: 'personalMatters',
      name: 'Asuntos Personales',
    },
    SPECIAL_PERMIT: {
      id: 'specialPermit',
      name: 'Permiso Especial'
    }
  })

  .constant('WoStatesId', {
    PLANNIFIED: 2,
    EXECUTED: 3,
    NO_EXECUTED: 4,
    TO_BILL: 6,
    SUPERVISED: 7,
    CLOSED: 8,
    PROGRESS: 9,
    PAUSE: 10,
    PENDING: 11,
  })
  .constant('TemplateTypes', {
    GENERIC: 'generic',
    ISSUE: 'issue',
    ZERO: 'r0',
  })
  .constant('WoTypes', {
    INCIDENCE: 1,
    ZERO: 2,
    PREVENTIVE: 3,
    CORRECTIVE: 4,
    OBRA: 5,
    TIME_MATERIAL: 6
  })
  .constant('WoTypesObj', {
    INCIDENCE: { id: 1, name: 'Incidencia' },
    ZERO: { id: 2, name: 'Informe Cero' },
    PREVENTIVE: { id: 3, name: 'Preventiva' },
    CORRECTIVE: { id: 4, name: 'Correctiva' },
    OBRA: { id: 5, name: 'Obra' },
  })

  .constant('WoContracts', {
    AT: 1,
    BT: 2,
    OTROS: 3,
  })

  .constant('InstallationTypes', [
    { id: 0, name: 'Edificio', value: 'Building' },
    { id: 1, name: 'Planta', value: 'Floor' },
    { id: 2, name: 'Zona', value: 'Zone' },
  ])
  .constant('WorkStates', {
    OPEN: 1,
    CLOSE: 2,
    END: 3,
  })
  .constant('WorkStatesObj', {
    OPEN: {
      id: 1,
      name: 'Abierta',
      class: 'open',
    },
    CLOSE: {
      id: 2,
      name: 'Cerrada',
      class: 'closed',
    },
  })
  .constant('WorkOrderColumns', [
    {
      name: 'NUMBER',
      translate: 'ots.number',
      sortable: 'id',
      field: 'id'
    },
    {
      name: 'WORK',
      translate: 'works.singular',
      field: 'work'
    },
    {
      name: 'INSTALLATION',
      translate: 'works.installation.singular',
      sortable: 'fromInstallation.name',
      field: 'installation'
    },
    {
      name: 'ASSET',
      translate: 'general.asset',
      sortable: 'asset.name',
      field: 'asset'
    },
    {
      name: 'CP',
      translate: 'wc.simple',
      sortable: 'workCenter.externalId',
    },
    {
      name: 'DESCRIPTION',
      translate: 'ots.description',
      sortable: 'description',
      field: 'description'
    },
    {
      name: 'TYPE',
      translate: 'ots.type',
      sortable: 'woTypeId',
      field: 'woType'
    },
    {
      name: 'STATE',
      translate: 'ots.status',
      sortable: 'woStateId',
      field: 'woState'
    },
    {
      name: 'CONTRACT',
      translate: 'ots.contract',
      field: 'contract'
    },
    {
      name: 'PERIODICITIES',
      translate: 'ots.revisionType',
      field: 'periodicities'
    },
    {
      name: 'INIT_DATE',
      translate: 'general.expectedDate',
      sortable: 'initDate',
      field: 'initDate'
    },
    {
      name: 'ESTIMATED_TIME',
      translate: 'general.duration',
      sortable: 'estimatedTime',
      field: 'estimatedTime'
    },
    {
      name: 'END_DATE',
      translate: 'ots.realEndDate',
      sortable: 'realEndDate',
      field: 'realEndDate'
    },
    {
      name: 'BRIGADE',
      translate: 'brigades.brigade',
      field: 'brigade'
    },
    {
      name: 'CLIENT',
      translate: 'client.title',
      field: 'client'
    },
    {
      name: 'FOREMAN',
      translate: 'ots.data.resources.workers.foreman',
      field: 'foreman'
    },
    {
      name: 'PRIORITY',
      translate: 'ots.data.priority',
      field: 'priority'
    },
    {
      name: 'ANOMALIES',
      translate: 'ots.data.anomalies',
      sortable: 'hasAnomalies',
      field: 'hasAnomalies'
    },
  ])
  .constant('StockOrderColumns', [
    {
      name: 'NUMBER',
      translate: 'stock.order.index.number',
      sortable: 'id',
    },
    {
      name: 'DESCRIPTION',
      translate: 'general.description',
      sortable: 'description',
    },
    {
      name: 'WORK',
      translate: 'works.singular',
    },
    {
      name: 'PROVIDER',
      translate: 'stock.order.index.provider',
    },
    {
      name: 'ORDER_DATE',
      translate: 'stock.order.index.dateAt',
      sortable: 'dateAt',
    },
    {
      name: 'DELIVERY_DATE',
      translate: 'stock.order.index.deliveryDate',
      sortable: 'deliveryDate',
    },
    {
      name: 'STATE',
      translate: 'ots.status',
      sortable: 'stateId',
    },
    {
      name: 'TYPE',
      translate: 'ots.type',
    },
    {
      name: 'COST',
      translate: 'stock.inventory.index.cost',
    },
  ])
  .constant('StockIncomingColumns', [
    {
      name: 'DELIVERY_NOTE_NUMBER',
      translate: 'budgets.detail.num',
      sortable: 'number',
    },
    {
      name: 'ORDER',
      translate: 'stock.incoming.index.order',
    },
    {
      name: 'WORK',
      translate: 'works.singular',
    },
    {
      name: 'DELIVERY_DATE',
      translate: 'stock.incoming.index.dateAt',
      sortable: 'dateAt',
    },
    {
      name: 'PROVIDER',
      translate: 'stock.order.index.provider',
    },
    {
      name: 'INVOICE_NUMBER',
      translate: 'stock.incoming.index.invoiceNote',
      sortable: 'invoiceNumber',
    },
    {
      name: 'INVOICE_COST',
      translate: 'stock.incoming.index.invoiceCost',
    },
    {
      name: 'INVOICE_DATE',
      translate: 'stock.incoming.index.invoiceDate',
      sortable: 'invoiceDate',
    },
    {
      name: 'TOTAL_COST',
      translate: 'stock.incoming.index.totalCost',
    },
  ])
  .constant('StockOrderReturnColumns', [
    {
      name: 'DELIVERY_NOTE_NUMBER',
      translate: 'budgets.detail.num',
      sortable: 'number',
    },
    {
      name: 'ORDER',
      translate: 'stock.orderReturn.index.order',
    },
    {
      name: 'WORK',
      translate: 'works.singular',
    },
    {
      name: 'PROVIDER',
      translate: 'stock.order.index.provider',
    },
    {
      name: 'DELIVERY_NOTE_DATE',
      translate: 'stock.orderReturn.index.deliveryNoteDate',
      sortable: 'deliveryNoteDate',
    },
    {
      name: 'INVOICE_NUMBER',
      translate: 'stock.orderReturn.index.invoiceNote',
      sortable: 'invoiceNumber',
    },
    {
      name: 'INVOICE_COST',
      translate: 'stock.orderReturn.index.invoiceCost',
    },
    {
      name: 'INVOICE_DATE',
      translate: 'stock.orderReturn.index.invoiceDate',
      sortable: 'invoiceDate',
    },
    {
      name: 'TOTAL_COST',
      translate: 'stock.orderReturn.index.totalCost',
    },
  ])
  .constant('ClientInvoiceColumns', [{
      name: 'NUMBER',
      key: 'number',
      translate: 'billing.clientInvoice.index.number',
      sortable: 'id',
    }, {
      name: 'CREATED_AT',
      key: 'createdAt',
      translate: 'billing.clientInvoice.index.createdAt',
      sortable: 'createdAt',
      isDate: true,
    }, {
      name: 'NAME',
      key: 'name',
      translate: 'billing.clientInvoice.index.name',
      sortable: 'name',
    }, {
      name: 'WORK',
      key: 'work.name',
      translate: 'billing.clientInvoice.index.work',
      class: 'text-align-left title-column'
    }, {
      name: 'CLIENT',
      key: 'client.name',
      translate: 'billing.clientInvoice.index.clientName',
    }, {
      name: 'BUDGET_NUMBER',
      key: 'work.budget.number',
      translate: 'billing.clientInvoice.index.budgetNumber',
    }, {
      name: 'STATE',
      translate: 'billing.clientInvoice.index.state',
      key: 'state.name',
      sortable: 'stateId',
    }, {
      name: 'CORRECTIVE_INVOICE',
      key: 'correctiveInvoice.number',
      translate: "billing.clientInvoice.index.correctiveInvoice",
    }, {
      name: 'DATE',
      key: 'date',
      translate: 'billing.clientInvoice.index.date',
      sortable: 'date',
      isDate: true,
    }, {
      name: 'DUE_DATE',
      key: 'dueDate',
      translate: 'billing.clientInvoice.index.dueDate',
      sortable: 'dueDate',
      isDate: true,
    }, {
      name: 'NEXT_DUE_DATES',
      translate: 'billing.clientInvoice.index.nextDueDates',
    }, {
      name: 'BASE_IMPORT',
      key: 'baseImport',
      translate: 'billing.clientInvoice.index.baseImport',
      excelNumFmt: '0.00€',
      excelTotalize: true,
      class: 'text-align-right'
    }, {
      name: 'TAX_IMPORT',
      key: 'taxImport',
      translate: 'billing.clientInvoice.index.taxImport',
      excelNumFmt: '0.00€',
      excelTotalize: true,
      class: 'text-align-right'
    }, {
      name: 'WITHHOLDING_TAX_IMPORT',
      key: 'withholdingTaxImport',
      translate: 'billing.clientInvoice.index.withholdingTaxImport',
      excelNumFmt: '0.00€',
      excelTotalize: true,
      class: 'text-align-right'
    }, {
      name: 'PENDING_IMPORT',
      key: 'pendingImport',
      translate: 'billing.clientInvoice.index.pendingImport',
      excelNumFmt: '0.00€',
      excelTotalize: true,
      class: 'text-align-right'
    }, {
      name: 'CHARGED_IMPORT',
      key: 'chargedImport',
      translate: 'billing.clientInvoice.index.chargedImport',
      excelNumFmt: '0.00€',
      excelTotalize: true,
      class: 'text-align-right'
    }, {
      name: 'TOTAL_IMPORT',
      key: 'totalImport',
      translate: 'billing.clientInvoice.index.totalImport',
      excelBold: true,
      excelNumFmt: '0.00€',
      excelTotalize: true,
      class: 'text-align-right'
    }])
  .constant('ProviderInvoiceColumns', [{
      name: 'NUMBER',
      key: 'number',
      translate: 'billing.providerInvoice.index.number',
      sortable: 'id',
    }, {
      name: 'CREATED_AT',
      key: 'createdAt',
      translate: 'billing.providerInvoice.index.createdAt',
      sortable: 'createdAt',
      isDate: true,
    }, {
      name: 'NAME',
      key: 'name',
      translate: 'billing.providerInvoice.index.name',
      sortable: 'name',
    }, {
      name: 'WORK',
      key: 'works',
      translate: 'billing.providerInvoice.index.work',
      class: 'text-align-left title-column'
    }, {
      name: 'PROVIDER',
      key: 'provider.name',
      translate: 'billing.providerInvoice.index.providerName',
    }, {
      name: 'INCOMINGS',
      translate: 'billing.providerInvoice.index.incomings',
    }, {
      name: 'ORDER_RETURNS',
      translate: 'billing.providerInvoice.index.orderReturns',
    }, {
      name: 'STATE',
      key: 'state.name',
      translate: 'billing.providerInvoice.index.state',
      sortable: 'providerInvoiceStateId',
    }, {
      name: 'CORRECTIVE_INVOICE',
      key: 'correctiveInvoice.number',
      translate: "billing.providerInvoice.index.correctiveInvoice",
    }, {
      name: 'DATE',
      key: 'date',
      translate: 'billing.providerInvoice.index.date',
      sortable: 'date',
      isDate: true,
    }, {
      name: 'DUE_DATE',
      key: 'dueDate',
      translate: 'billing.providerInvoice.index.dueDate',
      sortable: 'dueDate',
      isDate: true,
    }, {
      name: 'NEXT_DUE_DATES',
      translate: 'billing.providerInvoice.index.nextDueDates',
    }, {
      name: 'BASE_IMPORT',
      key: 'baseImport',
      translate: 'billing.providerInvoice.index.baseImport',
      excelNumFmt: '0.00€',
      excelTotalize: true,
    }, {
      name: 'TAX_IMPORT',
      key: 'taxImport',
      translate: 'billing.providerInvoice.index.taxImport',
      excelNumFmt: '0.00€',
      excelTotalize: true,
      class: 'text-align-right'
    }, {
      name: 'WITHHOLDING_TAX_IMPORT',
      key: 'withholdingTaxImport',
      translate: 'billing.providerInvoice.index.withholdingTaxImport',
      excelNumFmt: '0.00€',
      excelTotalize: true,
      class: 'text-align-right'
    }, {
      name: 'PENDING_IMPORT',
      key: 'pendingImport',
      translate: 'billing.providerInvoice.index.pendingImport',
      excelNumFmt: '0.00€',
      excelTotalize: true,
      class: 'text-align-right'
    }, {
      name: 'PAID_IMPORT',
      key: 'paidImport',
      translate: 'billing.providerInvoice.index.paidImport',
      excelNumFmt: '0.00€',
      excelTotalize: true,
      class: 'text-align-right'
    }, {
      name: 'TOTAL_IMPORT',
      key: 'totalImport',
      translate: 'billing.providerInvoice.index.totalImport',
      excelBold: true,
      excelNumFmt: '0.00€',
      excelTotalize: true,
      class: 'text-align-right'
    }])
  .constant('NoteColumns', [
    {
      name: 'NUMBER',
      value: 'Id nota',
      translate: 'note.id',
      sortable: 'id',
      field: 'id',
    },
    {
      name: 'DESCRIPTION',
      value: 'Descripción',
      translate: 'general.description',
      sortable: 'description',
      field: 'description',
    },
    {
      name: 'FOREMAN',
      value: 'Encargado',
      translate: 'note.foreman',
      sortable: 'foreman.name',
      field: 'foremanId',
    },
    {
      name: 'BRIGADE',
      value: 'Brigada',
      translate: 'note.brigade',
      sortable: 'brigade.name',
      field: 'brigadeId',
    },
    {
      name: 'DATE_AT',
      value: 'Fecha de nota',
      translate: 'note.dateAt',
      sortable: 'dateAt',
      field: 'dateAt',
    },
  ])
  .constant('ActivityTypes', {
    1: 'Obra',
    2: 'Mant.',
    3: 'Administración',
  })
  .constant('ActivityTypesId', {
    OBRA: 1,
    MANT: 2,
    TIME_MATERIAL: 3,
  })
  .constant('CertificationTypesId', {
    TO_ORIGIN: 0,
    PER_WO: 1,
  })
  .constant('StockOrderStates', {
    PROGRESS: {
      id: 1,
      name: 'En progreso',
      class: 'in-progress',
    },
    RECEIVED: {
      id: 2,
      name: 'Recibido',
      class: 'received',
    },
    SENT: {
      id: 3,
      name: 'Enviado',
      class: 'sent',
    },
    PARTIAL: {
      id: 4,
      name: 'Parcial',
      class: 'partial',
    },
    PENDING: {
      id: 5,
      name: 'Pdte.Revisar',
      class: 'pending'
    },
    REJECTED: {
      id: 6,
      name: 'Rechazado',
      class: 'rejected'
    },
    CONFIRMED: {
      id: 7,
      name: 'Confirmado',
      class: 'confirmed'
    },
    UPDATED: {
      id: 8,
      name: 'Confirmado con cambios',
      class: 'updated'
    }
  })
  .constant('ClientInvoiceStates', {
    CHARGED: {
      id: 1,
      name: 'Cobrado',
      class: 'charged',
    },
    PENDING: {
      id: 2,
      name: 'Pendiente',
      class: 'pending',
    },
    INCOMPLETE: {
      id: 3,
      name: 'Incompleta',
      class: 'incomplete',
    },
  })
  .constant('ProviderInvoiceStates', {
    PAID: {
      id: 1,
      name: 'Pagado',
      class: 'paid',
    },
    PENDING: {
      id: 2,
      name: 'Pendiente',
      class: 'pending',
    },
    INCOMPLETE: {
      id: 3,
      name: 'Incompleta',
      class: 'incomplete',
    },
  })
  .constant('DeletableBudgetState', ['progress', 'pending', 'uncontracted'])
  .constant('DailyReportReasons', ['Trabajo', 'Formación', 'Médico', 'Almacen', 'Otros'])
  .constant('WorkOrderFilters', [
    {
      name: 'WORK_CENTER',
      translate: 'wc.simple',
      size: 4,
    },
    {
      name: 'WORK',
      translate: 'works.singular',
      size: 4,
    },
    {
      name: 'INSTALLATION',
      translate: 'works.installation.singular',
      size: 4,
    },
    {
      name: 'CONTRACT',
      translate: 'ots.contract',
      size: 4,
    },
    {
      name: 'ASSET',
      translate: 'general.asset',
      size: 4,
    },
    {
      name: 'PERIODS',
      translate: 'ots.data.periods',
      size: 3,
    },
    {
      name: 'BRIGADE',
      translate: 'brigades.brigade',
      size: 4,
    },
    {
      name: 'CLIENT',
      translate: 'client.title',
      size: 4,
    },
    {
      name: 'FOREMAN',
      translate: 'ots.data.resources.workers.foreman',
      size: 4,
    },
    {
      name: 'TYPE',
      translate: 'ots.type',
      size: 3,
    },
    {
      name: 'STATE',
      translate: 'ots.status',
      size: 3,
    },
    {
      name: 'ACTIVITY',
      translate: 'ots.data.activity',
      size: 3,
    },
    {
      name: 'PRIORITY',
      translate: 'ots.data.priority',
      size: 3,
    },
    {
      name: 'INIT_FROM',
      translate: 'ots.filter.initFrom',
      size: 3,
    },
    {
      name: 'INIT_TO',
      translate: 'ots.filter.initTo',
      size: 3,
    },
    {
      name: 'REAL_INIT_FROM',
      translate: 'ots.filter.realInitFrom',
      size: 3,
    },
    {
      name: 'REAL_INIT_TO',
      translate: 'ots.filter.realInitTo',
      size: 3,
    },
    {
      name: 'ACTIVE_AT',
      translate: 'ots.filter.activeAt',
      size: 3,
    },
    {
      name: 'ANOMALIES',
      translate: 'ots.data.anomalies',
      size: 3,
    },
    {
      name: 'UNASSIGNED',
      translate: 'ots.filter.unassigned.title',
      size: 3,
    },
  ])
  .constant('StockOrderFilters', [{
      name: 'WORK',
      translate: 'works.singular',
      size: 4,
    }, {
      name: 'PROVIDER',
      translate: 'stock.order.index.provider',
      size: 3,
    }, {
      name: 'STATE',
      translate: 'ots.status',
      size: 3,
    }, {
      name: 'TYPE',
      translate: 'ots.type',
      size: 3
    }, {
      name: 'INIT_DATE',
      translate: 'stock.order.index.initDate',
      size: 3,
    }, {
      name: 'END_DATE',
      translate: 'stock.order.index.endDate',
      size: 3,
    }, {
      name: 'INIT_DELIVERY_DATE',
      translate: 'stock.order.index.initDeliveryDate',
      size: 3
    }, {
      name: 'END_DELIVERY_DATE',
      translate: 'stock.order.index.endDeliveryDate',
      size: 3
    }
  ])
  .constant('StockIncomingFilters', [{
      name: 'WORK',
      translate: 'works.singular',
      size: 4,
    }, {
      name: 'PROVIDER',
      translate: 'stock.order.index.provider',
      size: 3,
    }, {
      name: 'INIT_DELIVERY_DATE',
      translate: 'stock.incoming.index.initDeliveryDate',
      size: 3,
    }, {
      name: 'END_DELIVERY_DATE',
      translate: 'stock.incoming.index.endDeliveryDate',
      size: 3,
    }, {
      name: 'INIT_INVOICE_DATE',
      translate: 'stock.incoming.index.initInvoiceDate',
      size: 3,
    }, {
      name: 'END_INVOICE_DATE',
      translate: 'stock.incoming.index.endInvoiceDate',
      size: 3,
    },
  ])
  .constant('StockOrderReturnFilters', [{
      name: 'WORK',
      translate: 'works.singular',
      size: 4,
    }, {
      name: 'PROVIDER',
      translate: 'stock.order.index.provider',
      size: 3,
    }, {
      name: 'INIT_RETURN_DATE',
      translate: 'stock.orderReturn.index.initReturnDate',
      size: 3,
    }, {
      name: 'END_RETURN_DATE',
      translate: 'stock.orderReturn.index.endReturnDate',
      size: 3,
    }, {
      name: 'INIT_INVOICE_DATE',
      translate: 'stock.orderReturn.index.initInvoiceDate',
      size: 3,
    }, {
      name: 'END_INVOICE_DATE',
      translate: 'stock.orderReturn.index.endInvoiceDate',
      size: 3,
    },
  ])
  .constant('ClientInvoiceFilters', [
    {
      name: 'WORK',
      translate: 'billing.clientInvoice.index.work',
      size: 3
    }, {
      name: 'CLIENT',
      translate: 'billing.clientInvoice.index.clientName',
      size: 3,
    }, {
      name: 'STATE',
      translate: 'billing.clientInvoice.index.state',
      size: 3,
    },{
      name: 'DATE_FROM',
      translate: 'billing.clientInvoice.index.dateFrom',
      size: 3
    }, {
      name: 'DATE_TO',
      translate: 'billing.clientInvoice.index.dateTo',
      size: 3
    }, {
      name: 'DUE_DATE_FROM',
      translate: 'billing.clientInvoice.index.dueDateFrom',
      size: 3
    }, {
      name: 'DUE_DATE_TO',
      translate: 'billing.clientInvoice.index.dueDateTo',
      size: 3
    }
  ])
  .constant('ProviderInvoiceFilters', [
    {
      name: 'PROVIDER',
      translate: 'billing.providerInvoice.index.providerName',
      size: 3,
    },
    {
      name: 'STATE',
      translate: 'billing.providerInvoice.index.state',
      size: 3,
    },{
      name: 'DATE_FROM',
      translate: 'billing.clientInvoice.index.dateFrom',
      size: 3
    }, {
      name: 'DATE_TO',
      translate: 'billing.clientInvoice.index.dateTo',
      size: 3
    }, {
      name: 'DUE_DATE_FROM',
      translate: 'billing.providerInvoice.index.dueDateFrom',
      size: 3
    }, {
      name: 'DUE_DATE_TO',
      translate: 'billing.providerInvoice.index.dueDateTo',
      size: 3
    }
  ])
  .constant('NoteFilters', [
    {
      name: 'BRIGADE',
      translate: 'note.brigade',
      size: 4,
    },
    {
      name: 'FOREMAN',
      translate: 'note.foreman',
      size: 3,
    },
    {
      name: 'DATE_AT',
      translate: 'note.dateAt',
      size: 3,
    },
  ])
  .constant('InventorySettings', {
    columns: [
      {
        name: 'CODE',
        translate: 'stock.inventory.index.code',
        type: 'item',
        sortable: 'code',
      },
      {
        name: 'BRAND',
        translate: 'stock.inventory.index.brand',
        type: 'item',
        sortable: 'brand',
      },
      {
        name: 'MODEL',
        translate: 'stock.inventory.index.model',
        type: 'item',
        sortable: 'model',
      },
      {
        name: 'FAMILY',
        translate: 'stock.inventory.index.family',
        type: 'item',
        sortable: 'family',
      },
      {
        name: 'USE_TYPE',
        translate: 'stock.inventory.index.useType',
        type: 'item',
        sortable: 'useType',
      },
      {
        name: 'DESCRIPTION',
        translate: 'stock.inventory.index.description',
        type: 'item',
        sortable: 'description',
      },
      {
        name: 'LOTNUMBER',
        translate: 'stock.inventory.index.lotNumber',
        type: 'item',
        sortable: 'lotNumber',
      },
      {
        name: 'UNITS',
        translate: 'stock.inventory.index.units',
        type: 'item',
        sortable: 'units',
      },
      {
        name: 'AMOUNT',
        translate: 'stock.inventory.index.amount',
        type: 'item',
        sortable: 'amount',
      },
      {
        name: 'COST',
        translate: 'stock.inventory.index.cost',
        type: 'item',
        sortable: 'cost',
      },
      {
        name: 'TOTALCOST',
        translate: 'stock.inventory.index.totalCost',
        type: 'item',
      },
      {
        name: 'INCOMINGDATE',
        translate: 'stock.inventory.index.incomingDate',
        type: 'entry',
        sortable: 'incomingDate'
      },
      {
        name: 'OUTGOINGDATE',
        translate: 'stock.inventory.index.outgoingDate',
        type: 'entry',
        sortable: 'outgoingDate'
      },
      {
        name: 'WORKNUMBER',
        translate: 'stock.inventory.index.workNumber',
        type: 'entry',
        sortable: (a, b, direction = 'ASC') => direction === 'ASC' ? collator.compare(a.work?.number, b.work?.number) : collator.compare(b.work?.number, a.work?.number)
      },
      {
        name: 'WORKDESCRIPTION',
        translate: 'stock.inventory.index.workDescription',
        type: 'entry',
        sortable: (a, b, direction = 'ASC') => direction === 'ASC' ? collator.compare(a.work?.name, b.work?.name) : collator.compare(b.work?.name, a.work?.name)
      },
      {
        name: 'WORKORDERLOCATION',
        translate: 'stock.inventory.index.workOrderLocation',
        type: 'entry',
        sortable: (a, b, direction = 'ASC') => direction === 'ASC' ? collator.compare(a.workOrder?.place, b.workOrder?.place) : collator.compare(b.workOrder?.place, a.workOrder?.place)
      },
      {
        name: 'WORKORDERUSE',
        translate: 'stock.inventory.index.workOrderUse',
        type: 'entry',
        sortable: 'useType'
      },
      {
        name: 'CLIENT',
        translate: 'stock.inventory.index.client',
        type: 'entry',
        sortable: (a, b, direction = 'ASC') => direction === 'ASC' ? collator.compare(a.work?.client ?? a.provider, b.work?.client ?? b.provider) : collator.compare(b.work?.client ?? b.provider, a.work?.client ?? a.provider)
      },
      {
        name: 'CLIENTAMOUNT',
        translate: 'stock.inventory.index.amount',
        type: 'entry',
        sortable: (a, b, direction = 'ASC') => {
          const valueA = parseFloat(a.amount) || 0
          const valueB = parseFloat(b.amount) || 0
          return direction === 'ASC' ? valueA - valueB : valueB - valueA
        }
      },
      {
        name: 'CLIENTCOST',
        translate: 'stock.inventory.index.cost',
        type: 'entry',
        sortable: (a, b, direction = 'ASC') => {
          const valueA = parseFloat(a.cost) || 0
          const valueB = parseFloat(b.cost) || 0
          return direction === 'ASC' ? valueA - valueB : valueB - valueA
        }
      },
    ],
    filters: [
      {
        name: 'WORK',
        translate: 'works.singular',
        size: 2,
      },
      {
        name: 'FAMILY',
        translate: 'stock.inventory.index.family',
        size: 2,
      },
      {
        name: 'USE_TYPE',
        translate: 'stock.inventory.index.useType',
        size: 2
      },
      {
        name: 'DATEFROM',
        translate: 'general.dateFrom',
        size: 2
      },
      {
        name: 'DATETO',
        translate: 'general.dateTo',
        size: 2
      },
      {
        name: 'BRAND',
        translate: 'stock.inventory.index.brand',
        size: 2
      },
      {
        name: 'MODEL',
        translate: 'stock.inventory.index.model',
        size: 2
      }
    ],
  })
  .constant('customLocales', {
    es: {
      DATETIME_FORMATS: {
        ERANAMES: ['Before Christ', 'Anno Domini'],
        ERAS: ['BC', 'AD'],
        AMPMS: ['a.m.', 'p.m.'],
        DAY: ['Domingo', 'Lunes', 'Martes', 'miércoles', 'Jueves', 'Viernes', 'Sábado'],
        MONTH: [
          'Enero',
          'Febrero',
          'Marzo',
          'Abril',
          'Mayo',
          'Junio',
          'Julio',
          'Agosto',
          'Septiembre',
          'Octubre',
          'Noviembre',
          'Diciembre',
        ],
        FIRSTDAYOFWEEK: 0,
        STANDALONEMONTH: [
          'Enero',
          'Febrero',
          'Marzo',
          'Abril',
          'Mayo',
          'Junio',
          'Julio',
          'Agosto',
          'Septiembre',
          'Octubre',
          'Noviembre',
          'Diciembre',
        ],
        SHORTDAY: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
        SHORTMONTH: [
          'ene',
          'feb',
          'mar',
          'abr',
          'may',
          'jun',
          'jul',
          'ago',
          'sep',
          'oct',
          'nov',
          'dic',
        ],
        fullDate: "EEEE, d 'de' MMMM 'de' y",
        longDate: "d 'de' MMMM 'de' y",
        medium: 'dd/MM/yyyy HH:mm:ss',
        mediumDate: 'dd/MM/yyyy',
        mediumTime: 'HH:mm:ss',
        short: 'dd/MM/yy HH:mm',
        shortDate: 'dd/MM/yy',
        shortTime: 'HH:mm',
      },
      NUMBER_FORMATS: {
        CURRENCY_SYM: '\u20ac',
        DECIMAL_SEP: ',',
        GROUP_SEP: '.',
        PATTERNS: [
          {
            gSize: 3,
            lgSize: 3,
            macFrac: 0,
            maxFrac: 3,
            minFrac: 0,
            minInt: 1,
            negPre: '-',
            negSuf: '',
            posPre: '',
            posSuf: '',
          },
          {
            gSize: 3,
            lgSize: 3,
            macFrac: 0,
            maxFrac: 2,
            minFrac: 2,
            minInt: 1,
            negPre: '-',
            negSuf: '\u00a0\u00a4',
            posPre: '',
            posSuf: '\u00a0\u00a4',
          },
        ],
      },
      id: 'es-es',
      pluralCat: n => (n == 1 ? 'one' : 'other'),
    },
  })
  .constant('VacationsAndWatchesFilters', [{
      name: 'WORK_CENTER',
      translate: 'vacations.workCenter',
      size: 4,
    }, {
      name: 'BRIGADE',
      translate: 'brigades.title',
      size: 3,
    }, {
      name: 'WORKER',
      translate: 'person.workers',
      size: 3,
    }, {
      name: 'MONTH',
      translate: 'general.month',
      size: 3,
    }, {
      name: 'YEAR',
      translate: 'general.year',
      size: 3,
    }, {
      name: 'ABSENCE_TYPE',
      translate: 'vacations.title',
      size: 3,
    }])
  .constant('TRACKING_TYPES', {
    NONE: {
      id: 0,
      name: 'Niguno',
      class: 'tracking-type__none',
      translate: 'tracking.types.none'
    },
    NOTE: {
      id: 1,
      name: 'Nota',
      class: 'tracking-type__note',
      translate: 'tracking.types.note'
    }
  });
