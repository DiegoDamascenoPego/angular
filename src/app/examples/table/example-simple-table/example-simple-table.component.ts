import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Column } from 'src/app/components/table/column';
import { ColumnAction } from 'src/app/components/table/column-action';
import { ColumnMask } from 'src/app/components/table/column-mask';
import { Columns } from 'src/app/components/table/columns';
import { TypeAction } from 'src/app/components/table/type-action.enum';
import { TypeStyle } from 'src/app/components/table/type-style.enum';
import { Customer } from 'src/app/model/customer';

@Component({
  selector: 'app-example-simple-table',
  templateUrl: './example-simple-table.component.html',
  styleUrls: ['./example-simple-table.component.sass']
})
export class ExampleSimpleTableComponent implements OnInit {
  pageSize = 7;
  pageIndex = 0;
  pagelength = 3;

  dataSource = new MatTableDataSource<Customer>();

  displayedColumns: Column[] = [
    new Columns("id", "Code", [TypeStyle.W100]),
    new Columns("name", "Name"),
    new ColumnMask("cpf", "CPF", '000.000.000-00'),
    new ColumnAction("action", [TypeAction.EDIT, TypeAction.DELETE])

  ];

  pageOne: Customer[] = [
    { name: 'Sabrina', id: 1, cpf:'81457737094' },
    { name: 'Magali', id: 1, cpf: '48995466022'},
    { name: 'James Bowen', id: 1, cpf: '82154159036'},
  ];

  ngOnInit(): void { this.carregarDados(); }
  onEdit(entity: Customer) { }
  onDelete(id: number, descricao: String) { }
  onPesquisar(pageIndex: number = 0) {
    this.carregarDados();
  }

  private carregarDados() {
    this.dataSource = new MatTableDataSource<Customer>(this.pageOne);
    this.pageIndex = 0;
    this.pageSize = 7;
    this.pagelength = 3;
  }
}
