package com.mycompany.myapp.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;

/**
 * A Tables.
 */
@Entity
@Table(name = "tables")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Tables implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "numtable")
    private Integer numtable;

    @OneToOne(mappedBy = "tables")
    @JsonIgnore
    private Candidat candidat;

    @ManyToOne
    @JsonIgnoreProperties("tables")
    private Salle salle;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getNumtable() {
        return numtable;
    }

    public Tables numtable(Integer numtable) {
        this.numtable = numtable;
        return this;
    }

    public void setNumtable(Integer numtable) {
        this.numtable = numtable;
    }

    public Candidat getCandidat() {
        return candidat;
    }

    public Tables candidat(Candidat candidat) {
        this.candidat = candidat;
        return this;
    }

    public void setCandidat(Candidat candidat) {
        this.candidat = candidat;
    }

    public Salle getSalle() {
        return salle;
    }

    public Tables salle(Salle salle) {
        this.salle = salle;
        return this;
    }

    public void setSalle(Salle salle) {
        this.salle = salle;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Tables)) {
            return false;
        }
        return id != null && id.equals(((Tables) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Tables{" +
            "id=" + getId() +
            ", numtable=" + getNumtable() +
            "}";
    }
}
