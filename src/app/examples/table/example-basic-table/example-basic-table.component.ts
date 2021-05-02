import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Column } from 'src/app/components/table/column';
import { ColumnAction } from 'src/app/components/table/column-action';
import { ColumnEntity } from 'src/app/components/table/column-entity';
import { ColumnStatus } from 'src/app/components/table/column-status';
import { Columns } from 'src/app/components/table/columns';
import { TypeAction } from 'src/app/components/table/type-action.enum';
import { TypeField } from 'src/app/components/table/type-field.enum';
import { TypeStyle } from 'src/app/components/table/type-style.enum';
import { Consultation } from 'src/app/model/consultation';
import { StatusConsultation } from 'src/app/model/status-consultation.enum';

@Component({
  selector: 'app-example-basic-table',
  templateUrl: './example-basic-table.component.html',
  styleUrls: ['./example-basic-table.component.sass']
})
export class ExampleBasicTableComponent implements OnInit {

  pageSize = 2;
  pageIndex = 0;
  pagelength = 7;

  dataSource = new MatTableDataSource<Consultation>();

  displayedColumns: Column[] = [
    new ColumnStatus("status", "State", [TypeStyle.W100, TypeStyle.TCENTER], TypeField.STATUS),
    new ColumnEntity("customer", "Name"),
    new ColumnEntity("animal", "Animal"),
    new Columns("phones", "phones", [TypeStyle.W150], TypeField.PHONE),
    new Columns("date", "date", [TypeStyle.W200, TypeStyle.TCENTER], TypeField.DATETIME),
    new Columns("note", "Note"),
    new ColumnAction("action", [TypeAction.SUCCESS, TypeAction.EDIT, TypeAction.DELETE])
  ];

  title = 'angular-table-material';

  pageOne: Consultation[] = [
    { customer: { name: 'Jon Arbuckle', active: true, id: 1 }, animal: { name: 'Odie', active: true, id: 1 }, date: new Date().toDateString(), status: StatusConsultation.Finished, phones: "18998652768", note: "Pick up an hour before the appointment" },
    { customer: { name: 'Jon Arbuckle', active: true, id: 1 }, animal: { name: 'Garfield', active: true, id: 1 }, date: new Date().toDateString(), status: StatusConsultation.Late, phones: "1854335322", note: "Call before consultation" },
    { customer: { name: 'Charlie Brow', active: true, id: 1 }, animal: { name: 'Snoopy', active: true, id: 1 }, date: new Date().toDateString(), status: StatusConsultation.Pending, phones: "18998652768", note: "" },
    { customer: { name: 'George Newton', active: true, id: 1 }, animal: { name: 'Beethoven ', active: true, id: 1 }, date: new Date().toDateString(), status: StatusConsultation.Canceled, phones: "18998652768", note: "" },
    { customer: { name: 'Doug Funnie', active: true, id: 1 }, animal: { name: 'Costelinha ', active: true, id: 1 }, date: new Date().toDateString(), status: StatusConsultation.Pending, phones: "18998652768", note: "" },
    { customer: { name: 'Bart Simpson', active: true, id: 1 }, animal: { name: 'Ajudante de Papai Noel', active: true, id: 1 }, date: new Date().toDateString(), status: StatusConsultation.Pending, phones: "18998652768", note: "Confirm Treatment" },
    { customer: { name: 'Stanley Ipkiss', active: true, id: 1 }, animal: { name: 'Maylon', active: true, id: 1 }, date: new Date().toDateString(), status: StatusConsultation.Pending, phones: "18998652768", note: "" },
  ];


  pageTwo: Consultation[] = [
    { customer: { name: 'Sabrina', active: true, id: 1 }, animal: { name: 'Salem Saberhagen', active: true, id: 1 }, date: new Date().toDateString(), status: StatusConsultation.Pending, phones: "18998652768", note: "" },
    { customer: { name: 'Magali', active: true, id: 1 }, animal: { name: 'Mingau', active: true, id: 1 }, date: new Date().toDateString(), status: StatusConsultation.Pending, phones: "18998652768", note: "Pick up an hour before the appointment" },
    { customer: { name: 'James Bowen', active: true, id: 1 }, animal: { name: 'Bob ', active: true, id: 1 }, date: new Date().toDateString(), status: StatusConsultation.Canceled, phones: "18998652768", note: "" },
  ];


  ngOnInit(): void {
    this.carregarDados();
  }

  onConfirm(entity: Consultation) { }

  onEdit(entity: Consultation) { }

  onDelete(id: number, descricao: String) { }

  onPesquisar(pageIndex: number = 0) {

    if (pageIndex == 0) {
      this.dataSource = new MatTableDataSource<Consultation>(this.pageTwo);
      this.pageIndex = 1;
      this.pageSize = 7;
      this.pagelength = 10;
    } else {
      this.carregarDados();
    }

  }

  private carregarDados() {
    this.dataSource = new MatTableDataSource<Consultation>(this.pageOne);
    this.pageIndex = 0;
    this.pageSize = 7;
    this.pagelength = 10;
  }
}
